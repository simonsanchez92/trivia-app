import {
  QUESTIONS_LOADED,
  SET_CURRENT,
  UPDATE_BANK,
  SET_ANSWERS,
  CORRECT_ANSWER,
  RESET_STATE,
  GAME_OVER,
  GET_USERS,
  SET_USERNAME,
} from "../actions/types";

const initialState = {
  user: "",
  questions: [],
  questionNumber: 0,
  current: "",
  currentCorrect: "",
  answers: [],
  ranking: [],
  score: 0,
  time: 0,
};

function triviaReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case QUESTIONS_LOADED:
      return {
        ...state,
        questions: payload,
      };

    case SET_CURRENT:
      return {
        ...state,
        current: payload.current,
        answers: [],
      };

    case SET_ANSWERS:
      return {
        ...state,
        answers: payload.options,
        currentCorrect: payload.correct,
      };

    case CORRECT_ANSWER:
      return {
        ...state,
        score: state.score + 1,
      };

    case UPDATE_BANK:
      return {
        ...state,
        questionNumber: state.questionNumber + 1,
        questions: payload,
      };

    case GAME_OVER:
      return {
        ...state,
        questions: [],
        questionNumber: 0,
        current: "",
        currentCorrect: "",
        answers: [],
        score: 0,
        time: payload,
      };
    case GET_USERS:
      return {
        ...state,
        ranking: payload,
      };

    case SET_USERNAME:
      return {
        ...state,
        user: payload,
      };

    case RESET_STATE:
      return {
        ...state,
        user: "",
        questions: [],
        questionNumber: 0,
        current: "",
        currentCorrect: "",
        answers: [],
        score: 0,
        time: 0,
      };
    default:
      return state;
  }
}

export default triviaReducer;
