import React, {useState, useEffect} from 'react'


import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


import {connect} from 'react-redux';
import {setCurrent,
        submitAnswer} from '../actions/trivia'

const Form = ({setCurrent,submitAnswer, questions, questionNumber, answers, current, currentCorrect}) => {

    
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
      <Box>
        
<Box display="flex" py={6} justifyContent="space-between" className="count-time-container">
    <Typography variant="h5">Question <span id='question-count'>{questionNumber}</span> of 20</Typography>
    <Typography variant="h5" id="timer">00:00</Typography>
</Box>


        
<Box textAlign="left " className="question-container" id='question-container'>        

<Typography 
            variant="h4" 
            color="primary" 
            className='question'
             id='question'>
                {current && current.question}</Typography>
</Box>
        <Box component="form"
            
             my={4}
          
             display="flex"
             flexDirection="column"
             justifyContent="center"
             alignItems="flex-start"
             borderRadius="4px"
             className="form">
    
    <Box 
         boxShadow={1}
         width={600}
         
         mb={2}
         px={6}
         py={3}
         display="flex"
         flexDirection="column"
        justifyContent="center">
       
       <Box py={2} px={1} display="flex" width="100%" alignItems="flex-start">
       <FormControl  size='small' >
      <FormLabel component="legend"
                 color="primary"
                 filled={true}>Only one is true...</FormLabel>
      
  <RadioGroup  aria-label="gender" name="gender1" value={selected} onChange={(e)=> handleChange(e)}>

      {answers && answers.map((answer,i)=> <FormControlLabel key={i} value={answer} control={<Radio />} label={answer} />)}

  </RadioGroup>

    </FormControl>
       </Box>
      

    <Button onClick={()=>handleSubmit()} variant="contained" color="primary"  >Submit</Button>

    </Box>
  
        </Box>
      </Box>

    )
}

const mapStateToProps = state=>({
 questions: state.triviaReducer.questions,
 current: state.triviaReducer.current,
 answers: state.triviaReducer.answers,
 currentCorrect: state.triviaReducer.currentCorrect,
 questionNumber: state.triviaReducer.questionNumber
});

export default connect(mapStateToProps, {setCurrent, submitAnswer})(Form);
