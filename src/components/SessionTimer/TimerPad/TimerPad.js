import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Button from '../../commons/Button/Button';

const TimerPad = (props) => {

  const { active, playButton, pauseButton, resetButton } = props;

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Button 
            id={playButton.id} 
            action={playButton.action} 
            value={playButton.icon} 
            disabled={!active} 
          />
        </div>
        <div className="col">
          <Button 
            id={pauseButton.id} 
            action={pauseButton.action} 
            value={pauseButton.icon} 
            disabled={!active} 
          />
        </div>
        <div className="col">
          <Button 
            id={resetButton.id} 
            action={resetButton.action} 
            value={resetButton.icon} 
            disabled={!active} 
          />
        </div>
      </div>
    </div>
  );
};

export default TimerPad;