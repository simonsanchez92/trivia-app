import React from 'react'

import Form from './Form';


import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    form:{
     
        backgroundColor: '#eee',
        margin: '0 10px',
        padding:'20px',
        border: '2px solid black',
        borderRadius:'4px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    heroTitle:{
        fontSize: '3rem'
    },
    heroBtns:{
        width: '75%',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center'
    },
    playBtnContainer:{
        display: 'flex',
       
        margin:'20px 0'
    },
    textField:{
        flex:'1'
    }
})

 const Game = (props) => {

    const classes = useStyles(props);

    return (
        <div className={classes.root}>

            <Form/>
            
        </div>
    )
}

export default Game;
