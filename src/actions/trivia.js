import axios from 'axios';

import store from '../store';

import {QUESTIONS_LOADED,
        QUESTIONS_LOADED_FAIL,
        SET_CURRENT,
        SET_ANSWERS,
        CORRECT_ANSWER,
        INCORRECT_ANSWER,
        UPDATE_BANK} from './types';


const URL = 'https://opentdb.com/api.php?amount=20&type=multiple';




export const test = ()=>{

    console.log("Now working fine")
}

export const getQuestions = ()=> async dispatch=>{

    try {
        const res = await axios.get(URL);
        const data = await res.data.results;

        dispatch({
            type: QUESTIONS_LOADED,
            payload: data
        });

        store.dispatch(setCurrent(data))

    } catch (err) {

        dispatch({
            type: QUESTIONS_LOADED_FAIL,
        });
    }
    
}

export const setCurrent = (questions)=> async dispatch=>{


    const random = (Math.floor(Math.random() * questions.length));
    let current =   await questions[random];

     store.dispatch(updateBank(questions, current));

     store.dispatch(setOptions(current));
   
    
    dispatch({
        type: SET_CURRENT,
        payload: {
            current
            
        }
    })
    
}

export const setOptions = (question)=> async dispatch=>{

   let options = await [...question.incorrect_answers, question.correct_answer]; 
   //Shuffle array of options
   options = options.sort(()=> Math.random() - 0.5);

   const correct = question.correct_answer;
    
 
    
    dispatch({
        type: SET_ANSWERS,
        payload: {
           options,
            correct 
        }
    })
    
}

export const updateBank = (questions, current)=> async dispatch=>{

    const remainingQuestions = questions.filter(question=> question.question !== current.question)
    console.log('Hola desde update bank')
   
    dispatch({
        type: UPDATE_BANK,
        payload: remainingQuestions
    })
    
}

export const submitAnswer = (choice, correct)=> async dispatch=>{

    // store.dispatch(setCurrent());
    if(choice === correct){
        dispatch({
            type: CORRECT_ANSWER
        })
    }else{
        dispatch({
            type: INCORRECT_ANSWER
        })
    }
    
}

