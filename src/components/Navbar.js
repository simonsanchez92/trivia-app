import React from 'react'

import {AppBar,
        Toolbar,
        Typography,
        Button,
        IconButton,
       Box} from '@material-ui/core';
        
        
import MenuIcon from '@material-ui/icons/Menu';


const Navbar = () => {
    return (
        <AppBar position="sticky">
               <Toolbar >

                 <Box display="flex" 
                      justifyContent="space-between"
                     
                      width="100%">
                 <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon/>
    </IconButton>
    <Typography variant="h4" >
      Trivia
    </Typography>
    <Button color="inherit">Login</Button>
                 </Box>
    
  </Toolbar>
        </AppBar>
    )
}


export default Navbar;
