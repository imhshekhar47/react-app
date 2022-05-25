import {
    ChevronLeft as ChevronLeftIcon,
    Menu as MenuIcon
} from '@mui/icons-material';
import { Box, CssBaseline, CSSObject, Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, styled, Theme, Toolbar, Typography } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import React from 'react';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import { UserContext } from '../contexts';
import { AppLinkProps } from './nav';
import { NavUserWidget } from './NavUserWidget';


const Copyright: React.FunctionComponent = () => {
    return (
        <Box sx={{
            pt: 2,
            pb: 2,
            mt: 8,
            backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
        }}>
            <Typography variant='body2' sx={{ m: 4, textAlign: 'center' }}>
                {'Copyright © '} {new Date().getFullYear()} by  Himanshu Shekhar
            </Typography>
        </Box>
    )
}

const drawerWidth: number = 240;

interface NavMenuProps extends MuiAppBarProps {
    open?: boolean;
}
const NavMenuBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open' })<NavMenuProps>(
    ({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    })
);

const mixinDraweOpen = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const mixinDraweClose = (theme: Theme): CSSObject => ({
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
});

const NavDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
        ...(open && {
            ...mixinDraweOpen(theme),
            '& .MuiDrawer-paper': mixinDraweOpen(theme),
        }),
        ...(!open && {
            ...mixinDraweClose(theme),
            '& .MuiDrawer-paper': mixinDraweClose(theme),
        }),
    }),
);


interface ControlPanelProps {
    title: string,
    links?: Array<AppLinkProps>,
}
export const ControlPanel: React.FunctionComponent<ControlPanelProps> = ({ title, links }) => {
    const userDetails = React.useContext(UserContext);

    const [open, setOpen] = React.useState<boolean>(true);

    const toggleDrawer = () => {
        setOpen(!open);
    }

    const renderLinks = (): React.ReactNode => {
        console.log(links);
        return (<List>
            {
                links?.map((link, index) => (<ListItemButton key={`app-link-${index}`} component={RouterLink} to={`${link.path}`}>
                    {link.icon && <ListItemIcon>{link.icon}</ListItemIcon>}
                    <ListItemText>{link.lable}</ListItemText>
                </ListItemButton>))
            }
        </List>);
    }

    return (
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <CssBaseline />
            <NavMenuBar position='fixed' open={open}>
                <Toolbar sx={{
                    pr: '24px',
                }}
                >
                    <IconButton aria-label='menu'
                        size='large'
                        edge='start'
                        color='inherit'
                        sx={{
                            mr: '36px',
                            ...(open && { display: 'none' })
                        }}
                        onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" component="div"
                        sx={{
                            flexGrow: 1,
                        }}>
                        {title}
                    </Typography>
                    {
                        Boolean(userDetails.username) && <NavUserWidget />
                    }
                </Toolbar>
            </NavMenuBar>
            <NavDrawer variant='permanent' open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                {renderLinks()}
            </NavDrawer>
            <Box component="main"
                sx={{
                    flexGrow: 1,
                }}
            >
                <Toolbar />
                <Box sx={{}}>
                    <Outlet />
                    <Copyright />
                </Box>

            </Box>
        </Box>
    )
}