import actions from './Actions.js';

function changeDisplay(title, minutes, seconds) {
  return {
    type: actions.CHANGE_DISPLAY,
    display: {
      title,
      minutes,
      seconds
    }
  };
}

function playTimer(timerId) {
  return {
    type: actions.PLAY,
    timerId
  }
}

function pauseTimer() {
  type: actions.PAUSE
}

function resetTimer() {
  type: actions.RESET
}

function incrementBreakLength() {
  type: actions.INCREMENT_BREAK_LENGTH
}

function decrementBreakLength() {
  type: actions.DECREMENT_BREAK_LENGTH
}

function incrementSessionLength() {
  type: actions.INCREMENT_SESSION_LENGTH
}

function decrementSessionLength() {
  type: actions.DECREMENT_SESSION_LENGTH
}

const creators = {
  changeDisplay,
  playTimer,
  pauseTimer,
  resetTimer,
  incrementBreakLength,
  decrementBreakLength,
  incrementSessionLength,
  decrementSessionLength
}

export default creators;