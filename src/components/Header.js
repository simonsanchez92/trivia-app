import React, {useState} from 'react'

import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';

import store from '../store';
import {useHistory} from 'react-router-dom';

import {getQuestions, setUser} from '../actions/trivia';

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
 const [textFieldError, setTextFieldError] = useState(false);

 const [open, setOpen] = useState(false);



 

  const handleClickOpen = () => {
      if(formData !== ''){
        setTextFieldError(false);
        setOpen(true);
      }else{
        setTextFieldError(true);
      }
  };

  const handleClose = () => {
    setOpen(false);
    setTextFieldError(false);
  };






    const handleChange = (e)=>{
        setFormData(e.target.value);
    }
    
    const handlePlay = ()=>{
        if(formData !== ''){
            store.dispatch(getQuestions());            
            store.dispatch(setUser(formData));            
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
                                   error={textFieldError}
                                   label="Your name:" />
                         <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Play
            </Button>
            <Dialog
  open={open}
  onClose={handleClose}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
>
  <h3>Are you ready to play?</h3>
  
    <p id="alert-dialog-description">
      Before clicking on "Yes", prepare yourself and focus to answer 20 questions in the least amount of time
    </p>
  
  <DialogActions>
    <Button onClick={()=> handlePlay()} color="primary">
      Yes
    </Button>
    <Button onClick={handleClose} color="primary" autoFocus>
      No
    </Button>
  </DialogActions>
</Dialog>

</div>

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



