import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './SessionTimer.css';

import TimerDisplay from './TimerDisplay/TimerDisplay';
import TimerPad from './TimerPad/TimerPad';
import TimerConfig from './TimerConfig/TimerConfig';

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
    this.state = {
      timerCoutdown: 0,
      timerActive: false,
      sessionType: 'Session',
      sessionMinutes: 25,
      sessionSeconds: 0,
      breakLength: 5,
      sessionLength: 25
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.incrementBreakLength = this.incrementBreakLength.bind(this);
    this.decrementBreakLength = this.decrementBreakLength.bind(this);
    this.incrementSessionLength = this.incrementSessionLength.bind(this);
    this.decrementSessionLength = this.decrementSessionLength.bind(this);
  }

  handlePlay() {

    if (this.state.timerActive) {
      clearInterval(this.state.timerCoutdown);
      this.setState({timerActive: false});
    } else {
      let timerId = setInterval(() => {
        let time = getTimerValues(this.state.sessionMinutes, this.state.sessionSeconds);

        if (time[0] == 0 && time[1] == 0){
          document.getElementById("beep").play();
        }

        if (time[0] < 0) {
          this.setState({
            sessionType: (/Session/.test(this.state.sessionType)) ? 'Break': 'Session',
            sessionMinutes: (/Session/.test(this.state.sessionType)) ? this.state.breakLength : this.state.sessionLength, 
            sessionSeconds: 0
          });
        } else {
          this.setState({
            sessionMinutes: time[0], 
            sessionSeconds: time[1]
          });  
        }

      }, 1000);
      this.setState({timerCoutdown: timerId, timerActive: true});
    }

  }

  handleReset() {

    document.getElementById("beep").pause();
    document.getElementById("beep").load();
    if (this.state.timerActive) {
      clearInterval(this.state.timerCoutdown);
    }

    this.setState({
      timerCoutdown: 0,
      timerActive: false,
      sessionType: 'Session',
      sessionMinutes: 25,
      sessionSeconds: 0,
      breakLength: 5,
      sessionLength: 25
    });

  }

  incrementBreakLength() {
    if (!this.state.timerActive && this.state.breakLength < 60) {
      if (/Break/.test(this.state.sessionType)) {
        this.setState({
          sessionMinutes: this.state.sessionMinutes + 1,
          breakLength: this.state.breakLength + 1
        });
      } else {
        this.setState({breakLength: this.state.breakLength + 1});
      }
    }
  }

  decrementBreakLength() {
    if (!this.state.timerActive && this.state.breakLength > 1) {
      if (/Break/.test(this.state.sessionType)) {
        this.setState({
          sessionMinutes: this.state.sessionMinutes - 1,
          breakLength: this.state.breakLength - 1
        });
      } else {
        this.setState({breakLength: this.state.breakLength - 1});
      }
    }
  }

  incrementSessionLength() {
    if (!this.state.timerActive && this.state.sessionLength < 60) {
      if (/Session/.test(this.state.sessionType)) {
        this.setState({
          sessionMinutes: this.state.sessionMinutes + 1,
          sessionLength: this.state.sessionLength + 1
        });
      } else {
        this.setState({
          sessionLength: this.state.sessionLength + 1
        });
      }
    }
  }

  decrementSessionLength() {
    if (!this.state.timerActive && this.state.sessionLength > 1) {
      if (/Session/.test(this.state.sessionType)) {
        this.setState({
          sessionMinutes: this.state.sessionMinutes - 1,
          sessionLength: this.state.sessionLength - 1
        });
      } else {
        this.setState({
          sessionLength: this.state.sessionLength - 1
        });
      }
    }
  }
  
  render() {
    return (
      <div id="timer-container" className="container-fluid w-75">
        <div className="row">
          <div className="col-md-7">
            <TimerDisplay 
              title={this.state.sessionType} 
              minutes={this.state.sessionMinutes}
              seconds={this.state.sessionSeconds}
            />
            <TimerPad 
              playButton={
                {
                  id: "start_stop",
                  action: this.handlePlay,
                  icon: (this.state.timerActive) ? <i className="bi bi-pause-fill"></i> : <i className="bi bi-play-fill"></i>
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
                  active={this.state.timerActive}
                  label={"break-label"}
                  type={"break-length"}
                  title={"Break Length"}
                  incrementButton = {
                    {
                      id: "break-increment",
                      action:  this.incrementBreakLength,
                      icon: <i className="bi bi-arrow-up"></i>
                    }
                  }
                  decrementButton = {
                    {
                      id: "break-decrement",
                      action: this.decrementBreakLength,
                      icon: <i className="bi bi-arrow-down"></i>
                    }
                  }
                  configValue={this.state.breakLength}
                />
              </div>
              <div className="tab-pane fade" id="session" role="tabpanel" aria-labelledby="session-tab">
                <TimerConfig 
                  active={this.state.timerActive}
                  label={"session-label"}
                  type={"session-length"}
                  title={"Session Length"}
                  incrementButton = {
                    {
                      id: "session-increment",
                      action: this.incrementSessionLength,
                      icon: <i className="bi bi-arrow-up"></i>
                    }
                  }
                  decrementButton = {
                    {
                      id: "session-decrement",
                      action: this.decrementSessionLength,
                      icon: <i className="bi bi-arrow-down"></i>
                    }
                  }
                  configValue={this.state.sessionLength}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionTimer;