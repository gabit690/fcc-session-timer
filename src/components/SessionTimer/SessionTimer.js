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
      sessionType: 'Session',
      displayTime: "25:00",
      breakLength: 5,
      sessionLength: 25,
      timerActive: true//Arranca en false
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
      <div id="timer-container" className="container-fluid w-75 border">
        <div className="row bg-info">
          <div className="col-sm-8 bg-danger">
            <TimerDisplay 
              title={this.state.sessionType} 
              time={this.state.displayTime}
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
          {/* <div className="col">
            <TimerConfig 
              active={this.state.timerActive}
              label={"break-label"}
              title={"Break Length"}
              incrementButton = {
                {
                  id: "break-increment",
                  action: this.handleIncrement,
                  icon: "Arr"
                }
              }
              decrementButton = {
                {
                  id: "break-decrement",
                  action: this.handleDecrement,
                  icon: "Ab"
                }
              }
              configValue={this.state.breakLength}
            />
          </div>
          <div className="col">
            <TimerConfig 
              active={this.state.timerActive}
              label={"session-label"}
              title={"Session Length"}
              incrementButton = {
                {
                  id: "session-increment",
                  action: this.handleIncrement,
                  icon: "Arr"
                }
              }
              decrementButton = {
                {
                  id: "session-decrement",
                  action: this.handleDecrement,
                  icon: "Ab"
                }
              }
              configValue={this.state.sessionLength}
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default SessionTimer;