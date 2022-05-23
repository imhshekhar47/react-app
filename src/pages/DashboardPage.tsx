import { Dashboard } from '@mui/icons-material';
import React from 'react';
import { PageNav } from '../components';

export const DashboardPage: React.FunctionComponent = () => {
    return (
        <>
        <PageNav fluid icon={<Dashboard />} title='Dashboard' />
        </>
    )
}