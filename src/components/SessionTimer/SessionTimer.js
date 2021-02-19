import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './SessionTimer.css';

import TimerDisplay from './TimerDisplay/TimerDisplay';
import TimerPad from './TimerPad/TimerPad';
import TimerConfig from './TimerConfig/TimerConfig';

class SessionTimer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      timerActive: false,//Arranca en false
      sessionType: 'Session',
      sessionMinutes: 25,
      sessionSeconds: 0,
      breakLength: 5,
      sessionLength: 25,
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handlePlay() {

  }

  handlePause() {

  }

  handleReset() {

  }

  handleIncrement() {

  }

  handleDecrement() {

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
              active={this.state.timerActive}
              playButton={
                {
                  id: "start_stop",
                  action: this.handlePlay,
                  icon: <i class="bi bi-play-fill"></i>
                }
              }
              pauseButton={
                {
                  id: "pause",
                  action: this.handlePause,
                  icon: <i class="bi bi-pause-fill"></i>
                }
              }
              resetButton={
                {
                  id: "reset",
                  action: this.handleReset,
                  icon: <i class="bi bi-arrow-counterclockwise"></i>
                }
              }
            />
          </div>
          <div className="col-md-5 rounded bg-secondary">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="break-tab" data-bs-toggle="tab" data-bs-target="#break" type="button" role="tab" aria-controls="break" aria-selected="true">Break <i class="bi bi-gear-fill"></i></button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="session-tab" data-bs-toggle="tab" data-bs-target="#session" type="button" role="tab" aria-controls="session" aria-selected="false">Session <i class="bi bi-gear-fill"></i></button>
              </li>
            </ul>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="break" role="tabpanel" aria-labelledby="break-tab">
                <TimerConfig 
                  active={this.state.timerActive}
                  label={"break-label"}
                  title={"Break Length"}
                  incrementButton = {
                    {
                      id: "break-increment",
                      action: this.handleIncrement,
                      icon: <i class="bi bi-arrow-up"></i>
                    }
                  }
                  decrementButton = {
                    {
                      id: "break-decrement",
                      action: this.handleDecrement,
                      icon: <i class="bi bi-arrow-down"></i>
                    }
                  }
                  configValue={this.state.breakLength}
                />
              </div>
              <div class="tab-pane fade" id="session" role="tabpanel" aria-labelledby="session-tab">
                <TimerConfig 
                  active={this.state.timerActive}
                  label={"session-label"}
                  title={"Session Length"}
                  incrementButton = {
                    {
                      id: "session-increment",
                      action: this.handleIncrement,
                      icon: <i class="bi bi-arrow-up"></i>
                    }
                  }
                  decrementButton = {
                    {
                      id: "session-decrement",
                      action: this.handleDecrement,
                      icon: <i class="bi bi-arrow-down"></i>
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