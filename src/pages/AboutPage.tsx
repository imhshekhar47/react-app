import { Home, Info } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { PageNav } from '../components';

export const AboutPage: React.FunctionComponent = () => {
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h1'>React App</Typography>
                    <Box sx={{ flexGrow: 1}} />
                    <IconButton component={Link} to="/app" color='inherit'>
                        <Home />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <PageNav fluid icon={<Info />} title='About'>
                <Typography variant='body1'>
                    This is a sample react application
                </Typography>
            </PageNav>
        </>
    )
}