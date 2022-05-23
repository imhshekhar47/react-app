import { Info } from '@mui/icons-material';
import { Typography } from '@mui/material';
import React from 'react';
import { PageNav } from '../components';

export const AboutPage: React.FunctionComponent = () => {
    return (
        <>
        <PageNav fluid icon={<Info />} title='About'>
                <Typography variant='body1'>
                    This is a sample react application
                </Typography>
        </PageNav>
        </>
    )
}