import React from 'react'

import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';

import Header from './Header';


const useStyles = makeStyles({
    root: {
        position: 'relative',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.jpg'})`,
        backgroundColor: '#232A34',
        minHeight: '100vh',
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover',
        zIndex:'10'
    },
    overlay:{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        bottom: '0',
        backgroundColor: 'black',
        opacity: '0.5'
        
    }
})

const Home = (props) => {
    
    const classes = useStyles(props)
    

    return (
        <div className={classes.root}>
            <div className={classes.overlay}></div>

            <CssBaseline/>

           
       
            <Header/>

        </div>
    )
}

const mapStateToProps = state=>({

});

export default connect(mapStateToProps)(Home);



