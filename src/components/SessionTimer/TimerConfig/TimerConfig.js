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
            id={props.incrementButton.id} 
            action={props.incrementButton.action} 
            value={props.incrementButton.icon} 
            disabled={props.active} 
          />
        </div>
        <div className="col">
          {props.configValue}
        </div>
        <div className="col">
        <Button 
            id={props.decrementButton.id} 
            action={props.decrementButton.action} 
            value={props.decrementButton.icon} 
            disabled={props.active} 
          />
        </div>
      </div>
    </div>
  );
};

export default TimerConfig;