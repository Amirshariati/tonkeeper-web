import * as amplitude from '@amplitude/analytics-browser';
import { useQuery } from '@tanstack/react-query';
import { AccountState } from '@tonkeeper/core/dist/entries/account';
import { Network } from '@tonkeeper/core/dist/entries/network';
import { WalletState, walletVersionText } from '@tonkeeper/core/dist/entries/wallet';
import React, { useCallback, useContext, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';
import { QueryKey } from '../libs/queryKey';

const toWalletType = (wallet?: WalletState | null): string => {
    if (!wallet) return 'new-user';
    return walletVersionText(wallet.active.version);
};

const initGA = () => {
    const key = process.env.REACT_APP_MEASUREMENT_ID;
    if (!key) return false;
    ReactGA.initialize(key);

    return true;
};
const useInitAnalytics = (
    application: string | undefined,
    account?: AccountState,
    wallet?: WalletState | null
) => {
    return useQuery(
        [QueryKey.analytics, account?.activePublicKey],
        async () => {
            const ga = initGA();

            const key = process.env.REACT_APP_AMPLITUDE;
            if (!key) return [ga, false];

            amplitude.init(key, undefined, {
                defaultTracking: {
                    sessions: true,
                    pageViews: true,
                    formInteractions: false,
                    fileDownloads: false
                }
            });

            const event = new amplitude.Identify();
            event.set('application', application ?? 'Unknown');
            event.set('walletType', toWalletType(wallet));
            event.set('network', wallet?.network === Network.TESTNET ? 'testnet' : 'mainnet');
            event.set('accounts', account!.publicKeys.length);

            amplitude.identify(event);

            return [ga, true];
        },
        { enabled: account != null }
    );
};

export const useAmplitudeAnalytics = (
    application: string | undefined,
    account?: AccountState,
    wallet?: WalletState | null
) => {
    const location = useLocation();
    const { data } = useInitAnalytics(application, account, wallet);
    useEffect(() => {
        if (data) {
            if (data[0] === true) {
                ReactGA.send({ hitType: 'pageview', page: location.pathname });
            }
            if (data[1] === true) {
                const eventProperties = {
                    pathname: location.pathname
                };
                amplitude.track('Page View', eventProperties);
            }
        }
    }, [data, location.pathname]);

    return data;
};

export const AmplitudeAnalyticsContext = React.createContext<boolean[] | undefined>(undefined);

export type AmplitudeTransactionType =
    | 'send-ton'
    | 'send-jetton'
    | 'send-nft'
    | 'renew-dns'
    | 'link-dns'
    | 'send-trc20';

export const useTransactionAnalytics = () => {
    const enable = useContext(AmplitudeAnalyticsContext);

    return useCallback(
        (kind: AmplitudeTransactionType) => {
            if (enable) {
                if (enable[0] === true) {
                    ReactGA.event('Send Transaction', {
                        kind
                    });
                }
                if (enable[1] === true) {
                    amplitude.track('Send Transaction', {
                        kind
                    });
                }
            }
        },
        [enable]
    );
};

export const useActionAnalytics = () => {
    const enable = useContext(AmplitudeAnalyticsContext);

    return useCallback(
        (kind: string) => {
            if (enable) {
                if (enable[0] === true) {
                    ReactGA.event('Action', {
                        kind
                    });
                }
                if (enable[1] === true) {
                    amplitude.track('Action', {
                        kind
                    });
                }
            }
        },
        [enable]
    );
};

export const useBuyAnalytics = () => {
    const enable = useContext(AmplitudeAnalyticsContext);

    return useCallback(
        (kind: string) => {
            if (enable) {
                if (enable[0] === true) {
                    ReactGA.event('Navigate Buy', {
                        kind
                    });
                }
                if (enable[1] === true) {
                    amplitude.track('Navigate Buy', {
                        kind
                    });
                }
            }
        },
        [enable]
    );
};
