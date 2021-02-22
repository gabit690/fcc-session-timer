import actions from './Actions.js';

// DISPLAY CREATORS
const changeDisplay = (type, minutes, seconds) => {
  return {
    type: actions.CHANGE_DISPLAY,
    display: {
      type,
      minutes,
      seconds
    }
  };
}

const resetDisplay = () => {
  return {
    type: actions.RESET_DISPLAY,
  };
}

// TIMER CREATORS
const playTimer = (timerId) => {
  return {
    type: actions.PLAY_TIMER,
    timerId
  };
}

const pauseTimer = () => {
  return {
    type: actions.PAUSE_TIMER
  };
}

// CONFIG CREATORS
const incrementBreakLength = () => {
  return {
    type: actions.INCREMENT_BREAK_LENGTH
  };
}

const decrementBreakLength = () => {
  return {
    type: actions.DECREMENT_BREAK_LENGTH
  };
}

const incrementSessionLength = () => {
  return {
    type: actions.INCREMENT_SESSION_LENGTH
  };
}

const decrementSessionLength = () => {
  return {
    type: actions.DECREMENT_SESSION_LENGTH
  };
}

const resetConfig = () => {
  return {
    type: actions.RESET_CONFIG
  };
}

export {
  changeDisplay,
  resetDisplay,
  playTimer,
  pauseTimer,
  incrementBreakLength,
  decrementBreakLength,
  incrementSessionLength,
  decrementSessionLength,
  resetConfig
};