import React, {useState} from 'react'

import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

import store from '../store';
import {useHistory} from 'react-router-dom';

import {getQuestions} from '../actions/trivia';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    hero:{
        backgroundColor: '#eee',
        margin: '0 10px',
        padding:'20px',
        border: '2px solid black',
        borderRadius:'4px',
        zIndex:'10',
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

const Header = (props) => {
    const classes = useStyles(props);
    const history = useHistory();


    const [formData, setFormData] = useState('');

    const handleChange = (e)=>{
        setFormData(e.target.value);
    }
    
    const handlePlay = ()=>{
        if(formData !== ''){
            store.dispatch(getQuestions());            
            history.push('/game');
        }
    }

    return (
        <div className={classes.root}>
           
            <div className={classes.hero}>
                <h1 className={classes.heroTitle}>Ready to test your knowledge?</h1>
                <div className={classes.heroBtns}>
                    
                    <div className={classes.playBtnContainer}>
                     
                        <TextField value={formData}
                                   onChange={(e)=> handleChange(e)}
                                   className={classes.textField}
                                   variant="outlined"
                                   size='small'
                                   label="Your name:" />
                         <Button color="primary"
                                 variant='contained'
                                 onClick={()=> handlePlay()}>Play</Button>
                    </div>
                    <Button color="primary" variant='contained'>See Rankings</Button>
                </div>
            </div>
        </div> 
    )
}

const mapStateToProps = state=>({

});

export default connect(mapStateToProps)(Header);



