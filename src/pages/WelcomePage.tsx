import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const WelcomePage: React.FunctionComponent = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
        }}>
            <Outlet />
        </Box>
    )
}