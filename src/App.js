import {Fragment, useState, useEffect} from 'react';

// import './App.css';

import Navbar from './components/Navbar';
import Form from './components/Form';

import Home from './components/Home';
import Header from './components/Header';

import {Container} from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


import {getQuestions} from './actions/trivia';


import {Provider} from 'react-redux';
import store from './store';


function App() {

  const [questions, setQuestions] = useState([]);
 const [current, setCurrent] = useState([]);
 


 const startGame = ()=>{
  store.dispatch(getQuestions())
 }

 const answer = ()=>{
   console.log('Answering')
 }

 

  return (

<Provider store={store}>

<Fragment>
    {/* <Navbar/> */}
  
 

    <Home/>
  {/* <Form/> */}


<button id="start-btn" onClick={()=> startGame()}>Start Game</button>

<button id="answer-btn" onClick={()=> answer()}>Answer!</button>


  
  

    </Fragment>
    </Provider>
  );
}

export default App;
