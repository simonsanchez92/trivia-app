import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Button from "@material-ui/core/Button";

import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { setCurrent, submitAnswer, gameOver } from "../actions/trivia";

import Watch from "./Watch";

import Dialog from "@material-ui/core/Dialog";

import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

const useStyles = makeStyles({
  root: {
    margin: "0 auto",
    marginTop: "30px",
    backgroundColor: "#2c2c2ccc",
    width: "85%",
    color: "#eee",
    padding: "20px",
    zIndex: "2",
  },
  timerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionContainer: {},
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  optionsContainer: {
    width: "100%",
    padding: "15px 0",
  },
  formButton: {
    width: "500px",
    maxWidth: "100%",
  },
  paper: {
    padding: "20px",
  },
});

const Game = ({
  ownProps,
  gameOver,
  setCurrent,
  submitAnswer,
  questions,
  questionNumber,
  answers,
  current,
  currentCorrect,
  user,
  score,
}) => {
  const classes = useStyles(ownProps);
  const history = useHistory();

  const [selected, setSelected] = useState("");

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    if (selected !== "" && questions.length > 0) {
      submitAnswer(selected, currentCorrect);
      setCurrent(questions);
      setSelected("");
    } else if (questions.length < 1) {
      if (score >= 18) {
        setTitle(`Awesome, ${user}!`);
        setMessage(`you have answered ${score} answers correctly`);
      } else if (score > 10) {
        setTitle(`Very good, ${user}!`);
        setMessage(`You have answered ${score} answers correctly`);
      } else {
        setTitle(`Practice makes perfect, ${user}...`);
        setMessage(`You have answered ${score} answers correctly`);
      }
      gameOver(user, score);
      handleOpen();
    }
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <div className={classes.timerContainer}>
        <h3>
          Question <span id="question-count">{questionNumber}</span> of 20
        </h3>
        <h3 id="timer">
          <Watch />
        </h3>
      </div>

      <div className={classes.questionContainer} id="question-container">
        <h2 className="question" id="question">
          {current && current.question}
        </h2>
      </div>
      <form component="form" className={classes.form}>
        <div className={classes.optionsContainer}>
          <FormControl size="medium">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={selected}
              onChange={(e) => handleChange(e)}
            >
              {answers &&
                answers.map((answer, i) => (
                  <FormControlLabel
                    key={i}
                    value={answer}
                    control={<Radio />}
                    label={answer}
                  />
                ))}
            </RadioGroup>
          </FormControl>
        </div>
        <Button
          className={classes.formButton}
          onClick={() => handleSubmit()}
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
        <div>
          <Dialog
            classes={{
              paper: classes.paper,
            }}
            maxWidth={"sm"}
            open={open}
            onClose={handleClose}
            // aria-labelledby="alert-dialog-title"
            // aria-describedby="alert-dialog-description"
          >
            <h3 style={{ fontSize: "2rem", textAlign: "Center" }}>
              {title}{" "}
              {score >= 18 ? (
                <SentimentVerySatisfiedIcon />
              ) : (
                <SentimentSatisfiedIcon fontSize={"large"} color={"primary"} />
              )}
            </h3>

            <p style={{ fontSize: "1.3rem" }} id="alert-dialog-description">
              {message}
            </p>
          </Dialog>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  questions: state.triviaReducer.questions,
  current: state.triviaReducer.current,
  answers: state.triviaReducer.answers,
  currentCorrect: state.triviaReducer.currentCorrect,
  questionNumber: state.triviaReducer.questionNumber,
  ownProps: ownProps,
  user: state.triviaReducer.user,
  score: state.triviaReducer.score,
});

export default connect(mapStateToProps, { setCurrent, submitAnswer, gameOver })(
  Game
);
