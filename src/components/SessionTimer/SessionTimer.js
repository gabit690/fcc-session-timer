import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './SessionTimer.css';
import TimerDisplay from './TimerDisplay/TimerDisplay';
import TimerPad from './TimerPad/TimerPad';
import TimerConfig from './TimerConfig/TimerConfig';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../manageState/Mapping.js';

function getTimerValues(minutes, seconds) {
  let newValue = [minutes, seconds];
  if (seconds > 0) {
    newValue[1] = seconds - 1;
  } else if (minutes >= 0) {
    newValue[0] = minutes - 1;
    newValue[1] = 59;
  }
  return newValue;
}

class SessionTimer extends Component {
  
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleIncrementBreak = this.handleIncrementBreak.bind(this);
    this.handleDecrementBreak = this.handleDecrementBreak.bind(this);
    this.handleIncrementSession = this.handleIncrementSession.bind(this);
    this.handleDecrementSession = this.handleDecrementSession.bind(this);
  }

  handlePlay() {
    if (this.props.timerActive) {
      clearInterval(this.props.timerCoutdown);
      this.props.pauseTimer();
    } else {
      let timerId = setInterval(() => {
        let time = getTimerValues(this.props.sessionMinutes, this.props.sessionSeconds);
        if (time[0] == 0 && time[1] == 0){
          document.getElementById("beep").play();
        }
        if (time[0] < 0) {
          let type = (/Session/.test(this.props.sessionType)) ? 'Break': 'Session';
          let minutes = (/Session/.test(this.props.sessionType)) ? this.props.breakLength : this.props.sessionLength;
          let seconds = 0;
          this.props.changeDisplay(type, minutes, seconds);
        } else {
          this.props.changeDisplay(this.props.sessionType, time[0], time[1]);
        }
      }, 1000);
      this.props.playTimer(timerId);
    }
  }

  handleReset() {

    if (document.getElementById("beep").currentTime > 0) {
      document.getElementById("beep").pause();
    }
    document.getElementById("beep").load();

    if (this.props.timerActive) {
      clearInterval(this.props.timerCoutdown);
    }
    this.props.pauseTimer();
    this.props.resetDisplay();
    this.props.resetConfig();
  }

  handleIncrementBreak() {
    if (!this.props.timerActive && this.props.breakLength < 60) {
      if (/Break/.test(this.props.sessionType)) {
        this.props.changeDisplay('Break', this.props.breakLength + 1, 0);
      }
      this.props.incrementBreakLength();
    }
  }

  handleDecrementBreak() {
    if (!this.props.timerActive && this.props.breakLength > 1) {
      if (/Break/.test(this.props.sessionType)) {
        this.props.changeDisplay('Break', this.props.breakLength - 1, 0);
      }
      this.props.decrementBreakLength();
    }
  }

  handleIncrementSession() {
    if (!this.props.timerActive && this.props.sessionLength < 60) {
      if (/Session/.test(this.props.sessionType)) {
        this.props.changeDisplay('Session', this.props.sessionLength + 1, 0);
      } 
      this.props.incrementSessionLength();
    }
  }

  handleDecrementSession() {
    if (!this.props.timerActive && this.props.sessionLength > 1) {
      if (/Session/.test(this.props.sessionType)) {
        this.props.changeDisplay('Session', this.props.sessionLength - 1, 0);
      } 
      this.props.decrementSessionLength();
    }
  }
  
  render() {

    return (
      <div id="timer-container" className="container-fluid w-75">
        <div className="row">
          <div className="col-md-7">
            <TimerDisplay 
              title={this.props.sessionType} 
              minutes={this.props.sessionMinutes}
              seconds={this.props.sessionSeconds}
            />
            <TimerPad 
              playButton={
                {
                  id: "start_stop",
                  action: this.handlePlay,
                  icon: (this.props.timerActive) ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>
                }
              }
              resetButton={
                {
                  id: "reset",
                  action: this.handleReset,
                  icon: <i className="bi bi-arrow-counterclockwise"></i>
                }
              }
            />
          </div>
          <div className="col-md-5 rounded bg-secondary">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="break-tab" data-bs-toggle="tab" data-bs-target="#break" type="button" role="tab" aria-controls="break" aria-selected="true">Break <i className="bi bi-gear-fill"></i></button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="session-tab" data-bs-toggle="tab" data-bs-target="#session" type="button" role="tab" aria-controls="session" aria-selected="false">Session <i className="bi bi-gear-fill"></i></button>
              </li>
            </ul>
            <div className="tab-content mt-md-4" id="myTabContent">
              <div className="tab-pane fade show active" id="break" role="tabpanel" aria-labelledby="break-tab">
                <TimerConfig 
                  active={this.props.timerActive}
                  label={"break-label"}
                  type={"break-length"}
                  title={"Break Length"}
                  incrementButton = {
                    {
                      id: "break-increment",
                      action:  this.handleIncrementBreak,
                      icon: <i className="bi bi-arrow-up"></i>
                    }
                  }
                  decrementButton = {
                    {
                      id: "break-decrement",
                      action: this.handleDecrementBreak,
                      icon: <i className="bi bi-arrow-down"></i>
                    }
                  }
                  configValue={this.props.breakLength}
                />
              </div>
              <div className="tab-pane fade" id="session" role="tabpanel" aria-labelledby="session-tab">
                <TimerConfig 
                  active={this.props.timerActive}
                  label={"session-label"}
                  type={"session-length"}
                  title={"Session Length"}
                  incrementButton = {
                    {
                      id: "session-increment",
                      action: this.handleIncrementSession,
                      icon: <i className="bi bi-arrow-up"></i>
                    }
                  }
                  decrementButton = {
                    {
                      id: "session-decrement",
                      action: this.handleDecrementSession,
                      icon: <i className="bi bi-arrow-down"></i>
                    }
                  }
                  configValue={this.props.sessionLength}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (SessionTimer);