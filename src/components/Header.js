import React from 'react'

import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import {IconButton, Toolbar, Button} from '@material-ui/core';
import {AppBar} from '@material-ui/core';

import SortIcon from '@material-ui/icons/Sort';


const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',    
        color: '#fff'
    },
    appBar: {
        background: 'none'
    },
    icon: {
        color: '#fff',
        fontSize: '2rem'
    },
    appBarTitle: {
        flexGrow: '1'
    },
    appBarWrapper:{
        width: '80%',
        margin: '0 auto'
    },
    hero:{
        border: '2px solid black',
        zIndex:'10'
    },
    heroTitle:{
        fontSize: '3rem'
    },
    heroBtns:{
        display:'flex',
        justifyContent:'space-around'
    }
})

const Header = (props) => {
    
    const classes = useStyles(props)
    

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} elevation={0}>
                <Toolbar className={classes.appBarWrapper}>
                <h1 className={classes.appBarTitle}>Trivia</h1>
                <IconButton>
                    <SortIcon className={classes.icon}/>
                </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.hero}>
                <h1 className={classes.heroTitle}>Ready to test your knowledge?</h1>
                <div className={classes.heroBtns}>
                    <Button color="primary" variant='contained'>Play</Button>
                    <Button color="primary" variant='contained'>See Rankings</Button>
                </div>
            </div>
        </div> 
    )
}

const mapStateToProps = state=>({

});

export default connect(mapStateToProps)(Header);



