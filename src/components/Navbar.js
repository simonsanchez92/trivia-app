import React from 'react'

import {AppBar,
        Toolbar,
        Typography,
        Button,
        IconButton,
        } from '@material-ui/core';

import SortIcon from '@material-ui/icons/Sort';
       
        
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({

  appBar: {
    height: '80px'
      
  },
  icon: {
      color: '#fff',
      fontSize: '2rem',
     
  },
  appBarTitle: {
      flexGrow: '1'
  },
  appBarWrapper:{
      width: '80%',
      margin: '0 auto'
  }
})

const Navbar = (props) => {

  const classes = useStyles(props)

    return (
      <AppBar className={classes.appBar} elevation={0}>
      <Toolbar className={classes.appBarWrapper}>
      <h1 className={classes.appBarTitle}>Trivia</h1>
      <IconButton>
          <SortIcon className={classes.icon}/>
      </IconButton>
      </Toolbar>
     </AppBar>
    )
}


export default Navbar;
