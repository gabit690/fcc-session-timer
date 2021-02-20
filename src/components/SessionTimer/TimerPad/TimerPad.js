import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import './TimerPad.css';

import Button from '../../commons/Button/Button';

const TimerPad = (props) => {

  const { playButton, resetButton } = props;

  return (
    <div className="container-fluid">
      <div id="pad-buttons" className="text-center border py-1 rounded-pill bg-secondary shadow">
        <Button 
          id={playButton.id}
          type={"btn btn-dark" + " button-control"} 
          action={playButton.action} 
          value={playButton.icon}
        />
        <Button 
          id={resetButton.id} 
          type={"btn btn-dark" + " button-control"} 
          action={resetButton.action} 
          value={resetButton.icon}
        />
      </div>
    </div>
  );
};

export default TimerPad;