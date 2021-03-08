import {Fragment} from 'react';

import './App.css';

import Navbar from './components/Navbar';
import Form from './components/Form';

import {Container} from '@material-ui/core';




function App() {





  return (


<Fragment>
    <Navbar/>
    <Container >
  
    <div className="App">
      <h2>Trivia</h2>

<div className="count-time-container">
    <h3>Question <span id='question-count'>1</span> of 20</h3>
    <h3 id="timer">00:00</h3>
</div>

<div className="question-container" id='question-container'>        
    <p className='question' id='question'>How many main characters appear in the TV series 'Friends'?</p>
</div>


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
