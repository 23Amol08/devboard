// import React from "react";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
function Navbar(){
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            href='/'
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <DeveloperBoardIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Devboard
          </Typography>
          <Button color="inherit" href="/dashboard" >Dashboard</Button>
          <Button color="inherit" href="/login" >Login</Button>
          <Button color="inherit" href="/signup" >Signup</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    )
}

export default Navbar;