import { createStore } from 'redux';
import mainReducer from './Reducer.js'
import SessionTimer from '../components/SessionTimer/SessionTimer';
import { Provider } from 'react-redux';

// STORE

const store = createStore(mainReducer);

// WRAPPER MAIN COMPONENT

const SessionTimerWrapper = (
  <Provider store={store}>
    <SessionTimer />
  </Provider>
);

export default SessionTimerWrapper;