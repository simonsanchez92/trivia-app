import React, {useState, useRef} from 'react'
import {connect} from 'react-redux';


import {startClock} from '../actions/trivia';


 const Watch = ({startClock, time}) => {

    const [timer, setTimer] = useState(0)
    // const [isActive, setIsActive] = useState(false)
    // const [isPaused, setIsPaused] = useState(false)
    // const countRef = useRef(null)
  
    // const handleStart = () => {
    //   // start button logic here
    //   setIsActive(true);
    //   setIsPaused(true);
   
   
  startClock(time)
    console.log(time);
    //   countRef.current = setInterval(()=>{
    //       setTimer((timer)=> timer+1);
    //   }, 1000)
    // }
  
    // const handlePause = () => {
    //   // Pause button logic here
    //   clearInterval(countRef.current);
    //   setIsPaused(false);
    // }
  
    // const handleResume = () => {
    //   // Resume button logic here
    //   setIsPaused(true);
    //   countRef.current = setInterval(()=>{
    //     setTimer((timer)=> timer+1);
    // }, 1000)
    // }
  
    // const handleReset = () => {
    //   // Reset button logic here
    //   clearInterval(countRef.current);
    //   setIsActive(false)
    //   setIsPaused(false)
    //   setTimer(0)
    // }

    // const formatTime = () => {
    //     const getSeconds = `0${(timer % 60)}`.slice(-2)
    //     const minutes = `${Math.floor(timer / 60)}`
    //     const getMinutes = `0${minutes % 60}`.slice(-2)
     
    
    //     return `${getMinutes} : ${getSeconds}`
    //   }

    
//   handleStart();
 
  return (
       
          <div className='stopwatch-card'>
            {/* <p>{formatTime()}</p>  */}
          </div>
        
      );
}


const mapStateToProps = state=>({
 time: state.triviaReducer.time
});

export default connect(mapStateToProps, {startClock})(Watch);
