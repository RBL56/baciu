import React from 'react';
import { localize } from '@deriv-com/translations';
import { AccountSwitcher as UIAccountSwitcher, Divider } from '@deriv-com/ui';
import { TAccountSwitcherProps } from './types';
import NonEuAccounts from './non-eu-accounts';

const RealAccounts = ({
    modifiedCRAccountList,
    modifiedMFAccountList,
    switchAccount,
    tabs_labels,
    oAuthLogout,
    loginid,
    is_logging_out,
}: TAccountSwitcherProps) => {
    return (
        <div className='account-switcher-panel'>
            <div className='account-switcher-panel__real'>
                {modifiedCRAccountList && (
                    <NonEuAccounts
                        modifiedCRAccountList={modifiedCRAccountList}
                        switchAccount={switchAccount}
                        activeLoginId={loginid}
                        tabs_labels={tabs_labels}
                    />
                )}
                <Divider color='var(--border-divider)' />
                {modifiedMFAccountList && (
                    <NonEuAccounts
                        modifiedCRAccountList={modifiedMFAccountList}
                        switchAccount={switchAccount}
                        activeLoginId={loginid}
                        is_eu
                        tabs_labels={tabs_labels}
                    />
                )}
                <UIAccountSwitcher.Footer
                    onClick={oAuthLogout}
                    title={localize('Logout')}
                    footerIcon={
                        <img
                            src='https://static.deriv.com/static/bot/images/ic-logout.svg'
                            alt='logout'
                            width={16}
                            height={16}
                        />
                    }
                    isLoggingOut={is_logging_out}
                />
            </div>
        </div>
    );
};

export default RealAccounts;
