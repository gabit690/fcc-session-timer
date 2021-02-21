import { combineReducers } from "redux";
import actions from "./Actions.js";

// INITIAL STATES

const initialDisplay = {
  sessionType: 'Session',
  sessionMinutes: 25,
  sessionSeconds: 0
};

const initialTimer = {
  timerCoutdown: 0,
  timerActive: false
};

const initialConfig = {
  breakLength: 5,
  sessionLength: 25
};

// REDUCERS

function displayReducer(state = initialDisplay, action) {
  switch(action.type) {
    case actions.CHANGE_DISPLAY:
      return {
        sessionType: action.display.type,
        sessionMinutes: action.display.minutes,
        sessionSeconds: action.display.seconds
      };
    case actions.RESET_DISPLAY:
      return initialDisplay;
    default:
      return state;
  }
}

function timerReducer(state = initialTimer, action) {
  switch(action.type) {
    case actions.PLAY_TIMER:
      return {
        timerCoutdown: action.timerId,
        timerActive: true
      };
    case actions.PAUSE_TIMER:
      return initialTimer;
    default:
      return state;
  }
}

function configReducer(state = initialConfig, action) {
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
      case actions.RESET_CONFIG:
        return initialConfig;
    default:
      return state;
  }
}

// MAIN REDUCER

const rootReducer = combineReducers({
  display: displayReducer,
  timer: timerReducer,
  config: configReducer
});

export default rootReducer;