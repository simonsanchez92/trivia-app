import React, {useState, useEffect} from 'react'


import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Button from '@material-ui/core/Button';

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';


import {makeStyles} from '@material-ui/core/styles';


import {connect} from 'react-redux';
import {setCurrent,
        submitAnswer} from '../actions/trivia'

// import {Html5Entities} from 'html-entities';

const useStyles = makeStyles({
  root: {
    marginTop: '30px',
    backgroundColor: '#2c2c2cc9',
    width: '85%',
    color: '#eee',
    padding: '20px'
   
  },
  timerContainer:{
     display: 'flex',
     justifyContent: 'space-between'
  },
  questionContainer:{

  },
  form:{
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center'
  },
  optionsContainer:{
    width: '100%',
    padding: '15px 0'
  },
  formButton:{
    width: '500px',
    maxWidth:'100%'
  }
})


const Form = ({ownProps, setCurrent,submitAnswer, questions, questionNumber, answers, current, currentCorrect}) => {


  const classes = useStyles(ownProps);

    
    const [selected, setSelected] = useState('');
    
    
    
    useEffect(async ()=>{
      
      // setCurrent(questions);
    
    },[]);

   
    const handleSubmit = (e)=>{

      if(selected !== ''){
        submitAnswer(selected, currentCorrect);
        setCurrent(questions);
      }
    
      if(selected === currentCorrect){
        console.log('Correct!');
      }else{
        console.log('incorrect!');
      }
    }

    const handleChange = (e)=>{
        setSelected(e.target.value)
      }

    return (
      <div className={classes.root} id='test'>
        
<div  className={classes.timerContainer}>
    <h3>Question <span id='question-count'>{questionNumber}</span> of 20</h3>
    <h3 id="timer">00:00</h3>
</div>


        
<div className={classes.questionContainer} id='question-container'>        

<h2  className='question'
             id='question'>
                {current && current.question}</h2>
</div>
        <form component="form" className={classes.form}>
    
    <div 
         className={classes.optionsContainer}
         boxShadow={1}
         width={600}
         
         mb={2}
         px={6}
         py={3}
         display="flex"
         flexDirection="column"
        justifyContent="center">
       
       <FormControl  size='large' >
   
      
  <RadioGroup  aria-label="gender" name="gender1" value={selected} onChange={(e)=> handleChange(e)}>

      {answers && answers.map((answer,i)=> <FormControlLabel key={i} value={answer} control={<Radio />} label={answer} />)}

  </RadioGroup>

    </FormControl>
    
      


    </div>
    <Button className={classes.formButton}
            onClick={()=>handleSubmit()} variant="contained" color="primary">Submit</Button>
  
        </form>
      </div>

    )
}

const mapStateToProps = (state, ownProps)=>({
 questions: state.triviaReducer.questions,
 current: state.triviaReducer.current,
 answers: state.triviaReducer.answers,
 currentCorrect: state.triviaReducer.currentCorrect,
 questionNumber: state.triviaReducer.questionNumber,
 ownProps: ownProps
});

export default connect(mapStateToProps, {setCurrent, submitAnswer})(Form);
