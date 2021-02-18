import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './TimerDisplay.css';

const TimerDisplay = (props) => {
  
  const {title, time} = props;
  
  return (
    <div 
      id="display-container" 
      className="container-fluid border border-dark bg-light"
    >
      <h2 className="text-center my-2">{title + " Time"}</h2>
      <div className="text-center">{time}</div>
    </div>
  );
};

export default TimerDisplay;