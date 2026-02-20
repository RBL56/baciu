import React from 'react';
import { localize } from '@deriv-com/translations';
import { AccountSwitcher as UIAccountSwitcher } from '@deriv-com/ui';
import { TAccountSwitcherProps, TModifiedAccount } from './types';

const DemoAccounts = ({
    modifiedVRTCRAccountList,
    switchAccount,
    activeLoginId,
    tabs_labels,
    oAuthLogout,
    is_logging_out,
}: TAccountSwitcherProps) => {
    return (
        <div className='account-switcher-panel'>
            <div className='account-switcher-panel__demo'>
                <UIAccountSwitcher.AccountsPanel
                    title={tabs_labels.demo}
                >
                    {modifiedVRTCRAccountList?.map((account: TModifiedAccount) => (
                        <UIAccountSwitcher.AccountsItem
                            key={account.loginid}
                            account={account}
                            onSelectAccount={() => switchAccount(account.loginid)}
                            isActive={activeLoginId === account.loginid}
                        />
                    ))}
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
                </UIAccountSwitcher.AccountsPanel>
            </div>
        </div>
    );
};

export default DemoAccounts;
