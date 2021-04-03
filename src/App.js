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
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  pages: {
    position: "relative",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/background.jpg"
    })`,
    backgroundColor: "#232A34",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    zIndex: "10",
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "black",
    opacity: "0.3",
    zIndex: "1",
  },
});

function App(props) {
  const classes = useStyles(props);

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <Router>
          <Navbar />

          <main className={classes.pages}>
            <Switch>
              <Route exact path="/">
                {" "}
                <Home />
              </Route>
              <Route path="/game">
                {" "}
                <Game />{" "}
              </Route>
              <Route path="/rankings">
                {" "}
                <Rankings />{" "}
              </Route>
            </Switch>
            <div className={classes.overlay}></div>
          </main>
        </Router>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
