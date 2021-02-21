import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import SessionTimerWrapper from './manageState/SessionTimerWrapper';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="
     App
     container-fluid
     px-0"
    >
      <h1 className="text-center pt-3 mb-4">25 + 5 Clock</h1>
      {SessionTimerWrapper}
      <Contact />
    </div>
  );
}

export default App;

// https://codepen.io/freeCodeCamp/full/XpKrrW