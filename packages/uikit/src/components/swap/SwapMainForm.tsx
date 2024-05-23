import { styled } from 'styled-components';
import { SwapFromField } from './SwapFromField';
import { SwapToField } from './SwapToField';
import { SwapButton } from './SwapButton';
import { TonTransactionNotification } from '../connect/TonTransactionNotification';
import { useExecuteSwap } from '../../state/swap/useExecuteSwap';
import { useState } from 'react';
import { TonConnectTransactionPayload } from '@tonkeeper/core/dist/entries/tonConnect';
import {
    useSelectedSwap,
    useSwapFromAmount,
    useSwapFromAsset,
    useSwapToAsset
} from '../../state/swap/useSwapForm';
import { NonNullableFields } from '@tonkeeper/core/dist/utils/types';
import { CalculatedSwap } from '../../state/swap/useCalculatedSwap';
import { Address } from '@ton/core';
import { SwapTokensListNotification } from './tokens-list/SwapTokensListNotification';
import { IconButton } from '../fields/IconButton';
import { ArrowDownIcon } from '../Icon';

const MainFormWrapper = styled.div`
    width: 292px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const ChangeIconStyled = styled(IconButton)`
    height: 32px;
    width: 32px;
    position: absolute;
    right: calc(50% - 16px);
    bottom: -20px;

    background-color: ${props => props.theme.buttonTertiaryBackground};

    &:hover {
        background-color: ${props => props.theme.backgroundContentAttention};
    }
`;

export const SwapMainForm = () => {
    const { isLoading, mutateAsync: encode } = useExecuteSwap();
    const [modalParams, setModalParams] = useState<TonConnectTransactionPayload | null>(null);
    const [selectedSwap] = useSelectedSwap();
    const [fromAsset, setFromAsset] = useSwapFromAsset();
    const [toAsset, setToAsset] = useSwapToAsset();
    const [_, setFromAmount] = useSwapFromAmount();

    const onConfirm = async () => {
        const result = await encode(selectedSwap! as NonNullableFields<CalculatedSwap>);

        setModalParams({
            valid_until: (Date.now() + 10 * 60 * 1000) / 1000,
            messages: [
                {
                    address: Address.parse(result.to).toString({ bounceable: true }),
                    amount: result.value,
                    payload: result.body
                }
            ]
        });
    };

    const onChangeFields = () => {
        setFromAsset(toAsset);
        setToAsset(fromAsset);
        if (selectedSwap?.trade) {
            setFromAmount(selectedSwap.trade.to.relativeAmount);
        }
    };

    return (
        <MainFormWrapper>
            <SwapFromField>
                <ChangeIconStyled onClick={onChangeFields}>
                    <ArrowDownIcon />
                </ChangeIconStyled>
            </SwapFromField>
            <SwapToField />
            <SwapButton onClick={onConfirm} isEncodingProcess={isLoading || !!modalParams} />
            <TonTransactionNotification
                handleClose={() => setModalParams(null)}
                params={modalParams}
            />
            <SwapTokensListNotification />
        </MainFormWrapper>
    );
};
