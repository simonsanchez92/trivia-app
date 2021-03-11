import './App.css';

import Navbar from './components/Navbar';
import Game from './components/Game';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import {getQuestions} from './actions/trivia';


import {Provider} from 'react-redux';
import store from './store';

import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
      position: 'relative',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.jpg'})`,
      backgroundColor: '#232A34',
      minHeight: '100vh',
      backgroundRepeat:'no-repeat',
      backgroundSize: 'cover',
      zIndex:'5',
      
  },
  overlay:{
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      backgroundColor: 'black',
      opacity: '0.5',
      zIndex:'1'
      
  },
  pages:{

    margin: '20px 0'
  }
})


function App(props) {

  const classes = useStyles(props);

 const startGame = ()=>{
  store.dispatch(getQuestions());
 };

 const answer = ()=>{
   console.log('Answering');
 };

 

  return (

<Provider store={store}>

  <div className={classes.root}>
  

    <Router>

        <Navbar/>
      <div className={classes.pages}>

    <Switch>
       
      <Route exact path='/'>  <Home/> </Route>
      <Route exact path='/game'>  <Game/> </Route>
        

    </Switch>
    </div>

    
  
{/* <button id="start-btn" onClick={()=> startGame()}>Start Game</button>

<button id="answer-btn" onClick={()=> answer()}>Answer!</button>
 */}

</Router>
{/* <div className={classes.overlay}></div> */}

</div>

    </Provider>
  );
}

export default App;
