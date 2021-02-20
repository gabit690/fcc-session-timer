export { changeDisplay, playTimer, pauseTimer, resetTimer, incrementBreakLength, decrementBreakLength, incrementSessionLength, decrementSessionLength } from './ActionsCreators.js';

function mapStateToProps(state) {
  return {
    timerCoutdown: state.timerCoutdown,
    timerActive: state.timerActive,
    sessionType: state.sessionType,
    sessionMinutes: state.sessionMinutes,
    sessionSeconds: state.sessionSeconds,
    breakLength: state.breakLength,
    sessionLength: state.sessionLength
  };
}

const mapDispatchToProps = {
  changeDisplay, 
  playTimer, 
  pauseTimer, 
  resetTimer, 
  incrementBreakLength, 
  decrementBreakLength, 
  incrementSessionLength, 
  decrementSessionLength
}

export { mapStateToProps, mapDispatchToProps };