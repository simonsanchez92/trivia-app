import axios from 'axios';

import store from '../store';

import {QUESTIONS_LOADED,
        QUESTIONS_LOADED_FAIL,
        SET_CURRENT,
        SET_ANSWERS,
        SET_USERNAME,
        CORRECT_ANSWER,
        INCORRECT_ANSWER,
        UPDATE_BANK,
        GAME_OVER} from './types';


const URL = 'https://opentdb.com/api.php?amount=20&type=multiple';


const decodeHTML = (text)=>{
    const entities = [
      ['amp', '&'],
      ['apos', '\''],
      ['#039', '\''],
      ['#x27', '\''],
      ['#x2F', '/'],
      ['#39', '\''],
      ['#47', '/'],
      ['lt', '<'],
      ['gt', '>'],
      ['nbsp', ' '],
      ['quot', '"'],
      ['pi', 'π'],
      ['aacute', 'á'],
      ['eacute', 'é'],
      ['iacute', 'í'],
      ['oacute', 'ó'],
      ['uacute', 'ú']
  ];
  for (let i = 0, max = entities.length; i < max; ++i) 
      text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);
      return text; 
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
    current.question = decodeHTML(current.question);

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
   options = options.map(option=> decodeHTML(option));


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


export const setUser = (username)=> async dispatch=>{
    const user = username.toUpperCase(); 

    dispatch({
        type: SET_USERNAME,
        payload: user
    })

}

export const startClock = (time)=> async dispatch=>{
 
    // let time = 0;
    let newTime =  setInterval(()=>{
         time = time + 1;
    }, 1000)

    return newTime;
}


export const gameOver = ()=> async dispatch=>{
        dispatch({
            type: GAME_OVER
        })
 
}


