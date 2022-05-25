import {
    AccountCircle as AccountCircleIcon, Settings
} from '@mui/icons-material';
import { IconButton, Link, Menu, MenuItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { UserContext } from '../contexts';
import { AppLinkProps } from './nav';

const MenuLink: React.FunctionComponent<AppLinkProps> = ({ icon, lable, path }) => {
    return (
        <Link component={RouterLink} to={`${path}`} sx={{ textDecoration: 'none' }}>
            <MenuItem>{icon} &nbsp; {lable}</MenuItem>
        </Link>
    )
}

export const NavUserWidget: React.FunctionComponent = () => {
    const userDetail = React.useContext(UserContext);

    const [menuAnchorEl, setMenuAnchorEl] = React.useState<Element | null>(null);

    const handleAccountMenu = (event: React.MouseEvent) => {
        if (menuAnchorEl) {
            setMenuAnchorEl(null);
        } else {
            setMenuAnchorEl(event.currentTarget);
        }
    }
    return (
        <>
            <IconButton
                onClick={handleAccountMenu}
                aria-controls='account-menu'
                aria-haspopup='true'
                color='inherit'
                size='large'
            >
                <AccountCircleIcon />
                <Typography variant='body1' component="span">{ userDetail.username }</Typography>
            </IconButton>
            <Menu
                id="account-menu"
                anchorEl={menuAnchorEl}
                anchorOrigin={{
                    horizontal: 'right',
                    vertical: 'bottom',
                }}
                keepMounted
                open={Boolean(menuAnchorEl)}
                onClose={handleAccountMenu}
            >
                <Box sx={{
                    minWidth: '180px',
                    display: 'flex',
                    flexGrow: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 2,
                }}>
                    <AccountCircleIcon fontSize='large' /> 
                </Box>
                <MenuLink icon={<Settings fontSize='small' />} lable='Account Setting' path='/user' />
            </Menu>
        </>
    )
}