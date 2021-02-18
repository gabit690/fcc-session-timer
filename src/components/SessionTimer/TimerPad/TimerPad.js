import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Button from '../../commons/Button';

const TimerPad = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Button 
            id={props.playId} 
            action={props.playAction} 
            value={props.playIcon} 
            disabled={!props.active} 
          />
        </div>
        <div className="col">
          <Button 
            id={props.pauseId} 
            action={props.pauseAction} 
            value={props.pauseIcon} 
            disabled={!props.active} 
          />
        </div>
        <div className="col">
          <Button 
            id={props.resetId} 
            action={props.resetAction} 
            value={props.resetIcon} 
            disabled={!props.active} 
          />
        </div>
      </div>
    </div>
  );
};

export default TimerPad;