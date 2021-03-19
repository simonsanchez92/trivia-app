import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Home from "./components/Home";
import Rankings from "./components/Rankings";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "relative",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/background.jpg"
    })`,
    backgroundColor: "#232A34",
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    zIndex: "5",
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    backgroundColor: "black",
    opacity: "0.5",
    zIndex: "1",
  },
  pages: {
    padding: "20px 0",
    height: "100vh",
  },
});

function App(props) {
  const classes = useStyles(props);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />

        <div className={classes.root}>
          <div className={classes.pages}>
            <Switch>
              <Route exact path="/">
                {" "}
                <Home />
              </Route>
              <Route exact path="/game">
                {" "}
                <Game />{" "}
              </Route>
              <Route exact path="/rankings">
                {" "}
                <Rankings />{" "}
              </Route>
            </Switch>
          </div>
          {/* <div className={classes.overlay}></div> */}
        </div>
      </Router>

      <Footer />
    </Provider>
  );
}

export default App;
