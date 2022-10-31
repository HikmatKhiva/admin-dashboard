import * as React from 'react';
import Box from '@mui/material/Box';
import { Toolbar, IconButton, AppBar, Badge } from '@mui/material';
import { Avatar } from '@material-ui/core';
import { Search, Notifications } from '@mui/icons-material';

import './header.css'
export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar>
                    {/* Search input */}
                    <div className="flex-container between items-center">
                        <div className="search-container">
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
