import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { BLOCKCHAIN_NAME } from '@tonkeeper/core/dist/entries/crypto';
import { RecipientData, TonRecipientData } from '@tonkeeper/core/dist/entries/send';
import {
    TonTransferParams,
    parseTonTransfer
} from '@tonkeeper/core/dist/service/deeplinkingService';
import { checkWalletPositiveBalanceOrDie } from '@tonkeeper/core/dist/service/transfer/common';
import { estimateNftTransfer } from '@tonkeeper/core/dist/service/transfer/nftService';
import { NftItemRepr } from '@tonkeeper/core/dist/tonApiV1';
import { AccountsApi } from '@tonkeeper/core/dist/tonApiV2';
import React, { FC, useCallback, useRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useAppContext, useWalletContext } from '../../hooks/appContext';
import { useAppSdk } from '../../hooks/appSdk';
import { useTranslation } from '../../hooks/translation';
import { QueryKey } from '../../libs/queryKey';
import { Notification } from '../Notification';
import { ConfirmNftView } from './ConfirmNftView';
import { RecipientView, useGetToAccount } from './RecipientView';
import {
    MainButton,
    RecipientHeaderBlock,
    Wrapper,
    childFactoryCreator,
    duration,
    notifyError
} from './common';

const useNftTransferEstimation = (nftItem: NftItemRepr, data?: TonRecipientData) => {
    const { t } = useTranslation();
    const sdk = useAppSdk();
    const { api } = useAppContext();
    const wallet = useWalletContext();
    const client = useQueryClient();

    return useQuery(
        [QueryKey.estimate, data?.address],
        async () => {
            try {
                return await estimateNftTransfer(api, wallet, data!, nftItem);
            } catch (e) {
                await notifyError(client, sdk, t, e);
            }
        },
        { enabled: data != null }
    );
};

const useMinimalBalance = () => {
    const sdk = useAppSdk();
    const { api } = useAppContext();
    const walletState = useWalletContext();
    const { t } = useTranslation();
    const client = useQueryClient();

    return useMutation(async () => {
        const wallet = await new AccountsApi(api.tonApiV2).getAccount({
            accountId: walletState.active.rawAddress
        });
        try {
            checkWalletPositiveBalanceOrDie(wallet);
        } catch (e) {
            await notifyError(client, sdk, t, e);
        }
    });
};

const SendContent: FC<{ nftItem: NftItemRepr; onClose: () => void }> = ({ nftItem, onClose }) => {
    const sdk = useAppSdk();
    const { t } = useTranslation();
    const { standalone, extension } = useAppContext();
    const recipientRef = useRef<HTMLDivElement>(null);
    const confirmRef = useRef<HTMLDivElement>(null);

    const [right, setRight] = useState(true);
    const [recipient, setRecipient] = useState<TonRecipientData | undefined>();

    const { mutateAsync: getAccountAsync } = useGetToAccount();

    const { mutateAsync: checkBalanceAsync, isLoading: isChecking } = useMinimalBalance();

    const { data: fee } = useNftTransferEstimation(nftItem, recipient);

    const onRecipient = async (data: RecipientData) => {
        await checkBalanceAsync();
        setRight(true);
        setRecipient(data as TonRecipientData);
    };

    const backToRecipient = useCallback(() => {
        setRight(false);
        setRecipient(value => (value ? { ...value, done: false } : undefined));
    }, [setRecipient]);

    const [state, nodeRef] = (() => {
        if (!recipient || !recipient.done) {
            return ['recipient', recipientRef] as const;
        }
        return ['confirm', confirmRef] as const;
    })();

    const processRecipient = useCallback(
        async ({ address }: TonTransferParams) => {
            const item = { address: address };
            const toAccount = await getAccountAsync(item);

            setRecipient({
                address: { ...item, blockchain: BLOCKCHAIN_NAME.TON },
                toAccount,
                comment: '',
                done: true
            });
        },
        [setRecipient, getAccountAsync]
    );

    const onScan = async (signature: string) => {
        const param = parseTonTransfer({ url: signature });
        if (param === null) {
            return sdk.uiEvents.emit('copy', {
                method: 'copy',
                params: t('Unexpected_QR_Code')
            });
        } else {
            await processRecipient(param);
        }
    };

    return (
        <Wrapper standalone={standalone} extension={extension}>
            <TransitionGroup childFactory={childFactoryCreator(right)}>
                <CSSTransition
                    key={state}
                    nodeRef={nodeRef}
                    classNames="right-to-left"
                    addEndListener={done => {
                        setTimeout(done, duration);
                    }}
                >
                    <div ref={nodeRef}>
                        {state === 'recipient' && (
                            <RecipientView
                                data={recipient}
                                setRecipient={onRecipient}
                                onScan={onScan}
                                isExternalLoading={isChecking}
                                acceptBlockchains={[BLOCKCHAIN_NAME.TON]}
                                MainButton={MainButton}
                                HeaderBlock={() => (
                                    <RecipientHeaderBlock
                                        title={t('nft_transfer_title')}
                                        onClose={onClose}
                                    />
                                )}
                            />
                        )}
                        {state === 'confirm' && (
                            <ConfirmNftView
                                onClose={onClose}
                                onBack={backToRecipient}
                                recipient={recipient!}
                                fee={fee}
                                nftItem={nftItem}
                            />
                        )}
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Wrapper>
    );
};

export const SendNftAction: FC<{
    nftItem?: NftItemRepr;
    onClose: () => void;
}> = ({ nftItem, onClose }) => {
    const Content = useCallback(() => {
        if (!nftItem) return undefined;
        return <SendContent onClose={onClose} nftItem={nftItem} />;
    }, [nftItem, onClose]);

    return (
        <Notification isOpen={!!nftItem} handleClose={onClose} hideButton backShadow>
            {Content}
        </Notification>
    );
};
