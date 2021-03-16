import React, {useState, useRef, useEffect} from 'react'
import {connect} from 'react-redux';


import {getTime} from '../actions/trivia';

import store from '../store';


const Watch = ({ time, getTime}) => {

    const [timer, setTimer] = useState(0)
    const countRef = useRef(null)
  
    

    useEffect(()=>{
   

      countRef.current = setInterval(()=>{
        getTime(timer)
        setTimer((timer)=> timer+1);
    }, 1000)

    return ()=> clearInterval(countRef.current);
    },[timer])


    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
     
    
        return `${getMinutes} : ${getSeconds}`
      }

 
 
  return (
       
          <div className='stopwatch-card'>
            <p>{formatTime()}</p> 
          </div>
        
      );
}


const mapStateToProps = (ownProps, state)=>({
 time: ownProps.timer,
 
});

export default connect(mapStateToProps, {getTime})(Watch);
