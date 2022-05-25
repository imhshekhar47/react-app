import { AccountCircleOutlined } from '@mui/icons-material';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { UserContext } from '../../contexts';


export const UserProfile: React.FunctionComponent = () => {
    const userDetail = React.useContext(UserContext);

    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', flexGrow: 1 }}>
                <AccountCircleOutlined sx={{ mr: 2 }} />
                <Typography variant='h5'>Profile</Typography>
            </Box>

            <List>
                <ListItem>
                    <ListItemText primary="Username" secondary={userDetail.username} />
                </ListItem>
            </List>
        </>
    )
}