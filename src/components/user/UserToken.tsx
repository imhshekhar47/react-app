import { Key, KeyOutlined } from '@mui/icons-material';
import { Box, Divider, styled, Typography } from '@mui/material';
import React from 'react';

const TokenContainer = styled('div')(
    ({theme}) => ({
        backgroundColor: theme.palette.grey[100],
        padding: theme.spacing(2),
        marginBottom: theme.spacing(4),
    })
)

export const UserToken: React.FunctionComponent = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
                <KeyOutlined sx={{ mr: 2 }} />
                <Typography variant='h5'>Token</Typography>
            </Box>
            <br />

            <Typography variant='body1'>Access Token</Typography>
            <TokenContainer>

            </TokenContainer>

            <br />

            <Typography variant='body1'>Refresh Token</Typography>
            <TokenContainer>

            </TokenContainer>
        </>
    )
}