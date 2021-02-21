import { changeDisplay, resetDisplay, playTimer, pauseTimer, incrementBreakLength, decrementBreakLength, incrementSessionLength, decrementSessionLength, resetConfig } from './ActionsCreators.js';

function mapStateToProps(state) {
  return {
    timerCoutdown: state.timer.timerCoutdown,
    timerActive: state.timer.timerActive,
    sessionType: state.display.sessionType,
    sessionMinutes: state.display.sessionMinutes,
    sessionSeconds: state.display.sessionSeconds,
    breakLength: state.config.breakLength,
    sessionLength: state.config.sessionLength
  };
}

const mapDispatchToProps = {
  changeDisplay,
  resetDisplay,
  playTimer, 
  pauseTimer, 
  incrementBreakLength, 
  decrementBreakLength, 
  incrementSessionLength, 
  decrementSessionLength,
  resetConfig
}

export { mapStateToProps, mapDispatchToProps };