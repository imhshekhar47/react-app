import { AccountCircle, Key } from '@mui/icons-material';
import React from 'react';
import { PageNav } from '../components';

export const UserPage: React.FunctionComponent = () => {
    return (
        <PageNav icon={<AccountCircle />} title='User' links={[
            {
                icon: <Key />,
                lable: 'Token',
                path: '/app/user/token',
            },
            {
                icon: <AccountCircle />,
                lable: 'Profile',
                path: '/app/user/profile',
            }
        ]} />
    )
}