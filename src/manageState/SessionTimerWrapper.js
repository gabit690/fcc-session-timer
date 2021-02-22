import { createStore } from 'redux';
import rootReducer from './Reducer.js'
import SessionTimer from '../components/SessionTimer/SessionTimer';
import { Provider } from 'react-redux';

// STORE

console.log(rootReducer);

const store = createStore(rootReducer);

// WRAPPER MAIN COMPONENT

const SessionTimerWrapper = (
  <Provider store={store}>
    <SessionTimer />
  </Provider>
);

export default SessionTimerWrapper;