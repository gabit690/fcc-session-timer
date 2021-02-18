import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
      timerActive: false
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
      <div className="container-fluid">
        <div className="row">
          <div className="col">
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
                  icon: "P"
                }
              }
              pauseButton={
                {
                  id: "pause",
                  action: this.handlePause,
                  icon: "||"
                }
              }
              resetButton={
                {
                  id: "reset",
                  action: this.handleReset,
                  icon: "G"
                }
              }
            />
          </div>
          <div className="col">
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
          </div>
        </div>
      </div>
    );
  }
}

export default SessionTimer;