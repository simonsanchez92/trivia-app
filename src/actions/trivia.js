import axios from "axios";
import store from "../store";

import {
  QUESTIONS_LOADED,
  QUESTIONS_LOADED_FAIL,
  SET_CURRENT,
  SET_ANSWERS,
  SET_USERNAME,
  CORRECT_ANSWER,
  INCORRECT_ANSWER,
  UPDATE_BANK,
  GAME_OVER,
  GET_USERS,
  RESET_STATE,
} from "./types";

const URL = "https://opentdb.com/api.php?amount=20&type=multiple";

const decodeHTML = (text) => {
  const entities = [
    ["amp", "&"],
    ["apos", "'"],
    ["#039", "'"],
    ["#x27", "'"],
    ["#x2F", "/"],
    ["#39", "'"],
    ["#47", "/"],
    ["lt", "<"],
    ["gt", ">"],
    ["nbsp", " "],
    ["quot", '"'],
    ["pi", "π"],
    ["aacute", "á"],
    ["eacute", "é"],
    ["iacute", "í"],
    ["oacute", "ó"],
    ["uacute", "ú"],
  ];
  for (let i = 0, max = entities.length; i < max; ++i)
    text = text.replace(
      new RegExp("&" + entities[i][0] + ";", "g"),
      entities[i][1]
    );
  return text;
};

export const getQuestions = () => async (dispatch) => {
  try {
    const res = await axios.get(URL);
    const data = await res.data.results;

    dispatch({
      type: QUESTIONS_LOADED,
      payload: data,
    });

    store.dispatch(setCurrent(data));
  } catch (err) {
    dispatch({
      type: QUESTIONS_LOADED_FAIL,
    });
  }
};

export const setCurrent = (questions) => async (dispatch) => {
  const random = Math.floor(Math.random() * questions.length);
  let current = await questions[random];
  current.question = decodeHTML(current.question);

  store.dispatch(updateBank(questions, current));

  store.dispatch(setOptions(current));

  dispatch({
    type: SET_CURRENT,
    payload: {
      current,
    },
  });
};

export const setOptions = (question) => async (dispatch) => {
  let options = await [...question.incorrect_answers, question.correct_answer];
  //Shuffle array of options
  options = options.sort(() => Math.random() - 0.5);
  options = options.map((option) => decodeHTML(option));

  const correct = question.correct_answer;

  dispatch({
    type: SET_ANSWERS,
    payload: {
      options,
      correct,
    },
  });
};

export const updateBank = (questions, current) => async (dispatch) => {
  const remainingQuestions = questions.filter(
    (question) => question.question !== current.question
  );

  dispatch({
    type: UPDATE_BANK,
    payload: remainingQuestions,
  });
};

export const submitAnswer = (choice, correct) => async (dispatch) => {
  // store.dispatch(setCurrent());
  if (choice === correct) {
    dispatch({
      type: CORRECT_ANSWER,
    });
  } else {
    dispatch({
      type: INCORRECT_ANSWER,
    });
  }
};

export const setUser = (username) => async (dispatch) => {
  const user = username.trim();

  dispatch({
    type: SET_USERNAME,
    payload: user,
  });
};

//Setting up timer functionality
let currentTime = 0;

export const getTime = (time) => async (dispatch) => {
  currentTime = time;
  return currentTime;
};

export const gameOver = (user, score) => async (dispatch) => {
  try {
    const body = { name: user, score, time: currentTime };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.post("https://trivia-app-v1.herokuapp.com/api/users", body, config);

    dispatch({
      type: GAME_OVER,
      payload: currentTime,
    });

    store.dispatch(getUsers());
  } catch (err) {
    console.log(err);
  }
};

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://trivia-app-v1.herokuapp.com/api/users"
    );

    const data = await res.data.data;

    dispatch({
      type: GET_USERS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const resetState = () => async (dispatch) => {
  dispatch({
    type: RESET_STATE,
  });
};
