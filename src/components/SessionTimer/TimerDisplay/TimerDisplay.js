import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './TimerDisplay.css';

const TimerDisplay = (props) => {
  
  const {title, minutes, seconds} = props;
  const minutesDisplay = (minutes <= 9 ? "0":"") + minutes;
  const secondsDisplay = (seconds <= 9 ? "0":"") + seconds;
  const alert = minutesDisplay == 0;
  const time = minutesDisplay + ":" + secondsDisplay;

  return (
    <div 
      id="display-container" 
      className={"container-fluid border border-dark bg-light" + 
      (alert ? " text-danger" : "")}
    >
      <h2 id="timer-label" className="text-center my-2">{title + " Time"}</h2>
      <div id="time-left" className="text-center">{time}</div>
      <audio id="beep">
        <source src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"/>
      </audio>
    </div>
  );
};

export default TimerDisplay;