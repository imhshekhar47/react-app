import { AccountCircleOutlined } from '@mui/icons-material';
import { Box, Divider, Typography, useTheme } from '@mui/material';
import React from 'react';


export const UserProfile: React.FunctionComponent = () => {
    const theme = useTheme();
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1}}>
                <AccountCircleOutlined sx={{ mr: 2}} />
                <Typography  variant='h5'>Profile</Typography>
            </Box>
        </>
    )
}