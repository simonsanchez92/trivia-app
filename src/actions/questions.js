import axios from 'axios';

const URL = 'https://opentdb.com/api.php?amount=20&type=multiple';



export const test = ()=>{

    console.log("Now working fine")
}

export const getQuestions = async ()=>{
    const res = await axios.get(URL);
    const data = await res.data.results;
 
    return  data;
    
}


