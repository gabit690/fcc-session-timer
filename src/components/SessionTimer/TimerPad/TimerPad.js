import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import './TimerPad.css';

import Button from '../../commons/Button/Button';

const TimerPad = (props) => {

  const { active, playButton, pauseButton, resetButton } = props;

  return (
    <div className="container-fluid">
      <div id="pad-buttons" className="text-center rounded-pill bg-info">
        <Button 
          id={playButton.id}
          type={"btn btn-dark" + " button-control"} 
          action={playButton.action} 
          value={playButton.icon} 
          disabled={!active} 
        />
        <Button 
          id={pauseButton.id}
          type={"btn btn-dark" + " button-control"}  
          action={pauseButton.action} 
          value={pauseButton.icon} 
          disabled={!active} 
        />
        <Button 
          id={resetButton.id} 
          type={"btn btn-dark" + " button-control"} 
          action={resetButton.action} 
          value={resetButton.icon} 
          disabled={!active} 
        />
      </div>
    </div>
  );
};

export default TimerPad;