import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Button from '../../commons/Button/Button';

const TimerConfig = (props) => {

  return (
    <div className="container-fluid">
      <h2 id={props.label}>{props.title}</h2>
      <div className="row">
        <div className="col">
          <Button 
            id={props.decrementId} 
            action={props.decrementAction} 
            value={props.decrementIcon} 
            disabled={props.disabled} 
          />
        </div>
        <div className="col">
          {props.configValue}
        </div>
        <div className="col">
          <Button 
            id={props.incrementId} 
            action={props.incrementAction} 
            value={props.incrementIcon} 
            disabled={props.disabled} 
          />
        </div>
      </div>
    </div>
  );
};

export default TimerConfig;