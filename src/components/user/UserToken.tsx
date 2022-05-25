import { KeyOutlined } from '@mui/icons-material';
import { Box, styled, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';

const TokenContainer = styled('div')(
    ({ theme }) => ({
        backgroundColor: theme.palette.grey[100],
        padding: theme.spacing(2),
        marginBottom: theme.spacing(4),
    })
)

export const UserToken: React.FunctionComponent = () => {

    const [headers, setHeader] = React.useState<any>(null);

    React.useEffect(() => {
        const pageUrl = document.URL;
        console.log(pageUrl);
        axios.get(document.URL)
            .then(resp => {
                console.log(resp.headers);
                setHeader(resp.headers);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
                <KeyOutlined sx={{ mr: 2 }} />
                <Typography variant='h5'>Token</Typography>
            </Box>
            <br />
            <div>
                {JSON.stringify(headers)}
            </div>
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