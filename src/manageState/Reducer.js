import { combineReducers } from "redux";
import actions from "./Actions.js";

// INITIAL STATE

const initialState = {
  timerCoutdown: 0,
  timerActive: false,
  sessionType: 'Session',
  sessionMinutes: 25,
  sessionSeconds: 0,
  breakLength: 5,
  sessionLength: 25
};

// REDUCERS

function displayReducer(state = initialState, action) {
  switch(action.type) {
    case actions.CHANGE_DISPLAY:
      return {
        ...state,
        sessionType: action.display.type,
        sessionMinutes: action.display.minutes,
        sessionSeconds: action.display.seconds
      };
    default:
      return state;
  }
}

function timerReducer(state = initialState, action) {
  switch(action.type) {
    case actions.PLAY:
      return {
        ...state,
        timerCoutdown: action.timerId,
        timerActive: true
      };
    case actions.PAUSE:
      return {
        ...state,
        timerCoutdown: 0,
        timerActive: false
      };
    case actions.RESET:
      return {
        timerCoutdown: 0,
        timerActive: false,
        sessionType: 'Session',
        sessionMinutes: 25,
        sessionSeconds: 0,
        breakLength: 5,
        sessionLength: 25
      };
    default:
      return state;
  }
}

function configReducer(state = initialState, action) {
  switch(action.type) {
    case actions.INCREMENT_BREAK_LENGTH:
      return {
        ...state,
        breakLength: state.breakLength + 1
      };
    case actions.DECREMENT_BREAK_LENGTH:
      return {
        ...state,
        breakLength: state.breakLength - 1
      };
    case actions.INCREMENT_SESSION_LENGTH:
      return {
        ...state,
        sessionLength: state.sessionLength + 1
      };
    case actions.DECREMENT_SESSION_LENGTH:
      return {
        ...state,
        sessionLength: state.sessionLength - 1
      };
    default:
      return state;
  }
}

// MAIN REDUCER

const mainReducer = combineReducers({
  displayReducer,
  timerReducer,
  configReducer
});

export default mainReducer;