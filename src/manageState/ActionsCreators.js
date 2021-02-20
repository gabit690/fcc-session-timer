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

// TIMER CREATORS
const playTimer = (timerId) => {
  return {
    type: actions.PLAY,
    timerId
  };
}

const pauseTimer = () => {
  return {
    type: actions.PAUSE
  };
}

const resetTimer = () => {
  return {
    type: actions.RESET
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

export {
  changeDisplay,
  playTimer,
  pauseTimer,
  resetTimer,
  incrementBreakLength,
  decrementBreakLength,
  incrementSessionLength,
  decrementSessionLength
};