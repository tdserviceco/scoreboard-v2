import React, { Component } from 'react';
import io from "socket.io-client";
class SwitchPlace extends Component {

  constructor(props) {
    super(props);

    this.state = {
      replace: true
    };
  }


  ToggleSwitchPlace = (e) => {
    const LOCALHOST = "localhost:5100";
    const DOMAIN = "https://xbox-websocket-io.herokuapp.com/"
    const socket = io.connect(LOCALHOST);
    if (e.target.value === 'true') {
        this.setState({
          replace : false
        })
        console.log("im: " + e.target.value)
      }
    
    if (e.target.value === 'false') {
      this.setState({
        replace : true
      })
      console.log("im: " + e.target.value)
      }
    }

  render() {
    return (
      <div>
        <button onClick={this.ToggleSwitchPlace} onChange={this.ToggleSwitchPlace} value={this.state.replace}>Switch</button>
      </div>
    );
  }
}

export default SwitchPlace;