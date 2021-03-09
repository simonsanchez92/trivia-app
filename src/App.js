import {Fragment} from 'react';

import './App.css';

import Navbar from './components/Navbar';
import Form from './components/Form';

import {Container} from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function App() {





  return (


<Fragment>
    <Navbar/>
    <Container >
  
    <div className="App">


<Box display="flex" py={6} justifyContent="space-between" className="count-time-container">
    <Typography variant="h5">Question <span id='question-count'>1</span> of 20</Typography>
    <Typography variant="h5" id="timer">00:00</Typography>
</Box>

<Box textAlign="left " className="question-container" id='question-container'>        

    <Typography 
                variant="h4" 
                color="primary" 
                className='question'
                 id='question'>
                   How many main characters appear in the TV series 'Friends'?</Typography>
</Box>


  <Form/>
{/* 
<form className="form">
    
    <div className="answers-container">
        <input type="radio" id="male" name="gender" value="male"/>
        <label for="male">2</label>

        <input type="radio" id="female" name="gender" value="female"/>
        <label for="female">female</label>

        
        <input type="radio" id="female" name="gender" value="female"/>
        <label for="female">6</label>

        
        <input type="radio" id="female" name="gender" value="female"/>
        <label for="female">4</label>
    </div>

  
    <button id='submit-btn'>Submit</button>
</form>

<button id="start-btn">Start Game</button> */}

<div id="results-container" className="results-container">
    
</div>

    </div>
    </Container>

    </Fragment>
  );
}

export default App;
