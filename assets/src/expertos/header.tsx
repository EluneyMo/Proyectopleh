import React, { useState } from 'react';
import AppBarMui from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';

import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const CustomAppBar: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBarMui position="static" sx={{ backgroundColor: 'violet' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                       
                        sx={{
                           
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            fontSize:30,
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    > PLEH
                    </Typography>
                 
                   
                </Toolbar>
            </Container>
        </AppBarMui>
    );
};

export default CustomAppBar;
