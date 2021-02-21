import { createStore } from 'redux';
import rootReducer from './Reducer.js'
import SessionTimer from '../components/SessionTimer/SessionTimer';
import { Provider } from 'react-redux';

// STORE

const iniState = {
  timerCoutdown: 0,
  timerActive: false,
  sessionType: 'Session',
  sessionMinutes: 25,
  sessionSeconds: 0,
  breakLength: 5,
  sessionLength: 25
};

function disReducer(state = iniState, action) {
  switch(action.type) {
    case 'CHANGE_DISPLAY':
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
console.log(rootReducer);
console.log(disReducer);
const store = createStore(rootReducer);

// WRAPPER MAIN COMPONENT

const SessionTimerWrapper = (
  <Provider store={store}>
    <SessionTimer />
  </Provider>
);

export default SessionTimerWrapper;