import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './TimerConfig.css';

import Button from '../../commons/Button/Button';

const TimerConfig = (props) => {

  return (
    <div className="container-fluid my-3">
      <h2 id={props.label} className="text-center fs-4">{props.title}</h2>
      <div className="d-flex justify-content-center">
        <Button 
          id={props.incrementButton.id} 
          type={"btn btn-dark"}  
          action={props.incrementButton.action} 
          value={props.incrementButton.icon} 
          disabled={props.active} 
        />
        <div id={props.type} className="value-container justify-content-center d-flex align-items-center bg-light border border-dark rounded-circle px-2 mx-3 fs-1">
          {props.configValue}
        </div>
        <Button 
            id={props.decrementButton.id} 
            type={"btn btn-dark"}  
            action={props.decrementButton.action} 
            value={props.decrementButton.icon} 
            disabled={props.active} 
          />
      </div>
    </div>
  );
};

export default TimerConfig;