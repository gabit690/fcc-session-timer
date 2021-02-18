import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const TimerDisplay = ({title, time} = props) => {
  return (
    <div className="container-fluid">
      <h2>{title}</h2>
      <div>{time}</div>
    </div>
  );
};

export default TimerDisplay;