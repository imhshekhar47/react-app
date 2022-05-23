import { Help, KeyboardArrowRight } from '@mui/icons-material';
import { Button, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, styled, Toolbar, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, Link as RouterLink, NavLinkProps, Outlet } from 'react-router-dom';
import { AppLinkProps } from '.';

interface PageNavProps {
    fluid?: boolean,
    icon?: React.ReactNode,
    title: string,
    links?: Array<AppLinkProps>,
    children?: React.ReactNode,
}
export const PageNav: React.FunctionComponent<PageNavProps> = ({ fluid, icon, title, links, children }) => {
    const theme = useTheme();

    return (
        <>
            <Toolbar sx={{
                [theme.breakpoints.up('sm')]: {
                    pl: 2,
                    pr: 2,
                    minHeight: theme.spacing(6),
                },
            }}>
                <Box component='div' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>{icon}</Box>
                <Typography variant='h5' >{title}</Typography>
                <Box component="span" sx={{ flexGrow: 1 }} />
                <IconButton component={Link} to={`/user`}><Help /></IconButton>
            </Toolbar>
            <Divider sx={{ mb: 2, }} />
            <Box sx={{
                display: 'flex',
                flexGrow: 1,
                flexDirection: 'row',
                padding: 0,
            }}>
                {
                    links && <List sx={{
                        minWidth: 160,
                        padding: 0,
                    }}>
                        {
                            links?.map((item, index) => (<ListItemButton key={`link-${index}`} disableRipple component={Link} to={item.path} sx={{
                                paddingLeft: 2,
                            }}>
                                <ListItemIcon sx={{ width: theme.spacing(3) }}>{item.icon || <KeyboardArrowRight />}</ListItemIcon>
                                <ListItemText>{item.lable} </ListItemText>
                            </ListItemButton>))
                        }
                    </List>
                }
                <Paper elevation={0} sx={{
                    flexGrow: 1,
                    pl: 2,
                    pt: 1,
                    [theme.breakpoints.up('md')]: {
                        pl: fluid ? 2 : '240px',
                        pr: fluid ? 2 : '240px',
                    }
                }}>
                    <div>
                        {children}
                    </div>
                    <Outlet />
                </Paper>
            </Box>
        </>
    )
}