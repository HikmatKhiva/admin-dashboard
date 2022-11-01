import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import { Toolbar, IconButton, AppBar, Badge } from '@mui/material';
import { Avatar } from '@material-ui/core';
import { Search, Notifications, Menu } from '@mui/icons-material';
import './header.css'
import { SidebarContext } from '../../context/SidebarContext';
export default function Header() {
    const { setSidebar } = useContext(SidebarContext);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar>
                    {/* Search input */}
                    <div className="flex-container between items-center">
                        <div className="search-container ">
                            <IconButton onClick={() => setSidebar(prev => !prev)} className='open-sidebar'>
                                <Menu />
                            </IconButton>
                            <input type='text' placeholder='Search' />
                            <IconButton className='search-btn'>
                                <Search />
                            </IconButton>
                        </div>
                        {/* User Account Info */}
                        <div className="account-info">
                            <Avatar style={{ width: '30px', height: '30px' }} />
                            <IconButton>
                                <Badge variant='dot' color="secondary">
                                    <Notifications color="action" />
                                </Badge>
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
