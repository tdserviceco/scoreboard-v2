import React, { Component } from 'react';
import io from "socket.io-client";
const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/"
const socket = io.connect(LOCALHOST);
class SwitchPlace extends Component {

  constructor(props) {
    super(props);

    this.state = {
      replace: true
    };
  }


  ToggleSwitchPlace = (e) => {
    if (e.target.value === 'true') {
      this.setState({
        replace: false
      })
      let swap = {
        replace: this.state.replace

      };
      socket.emit('swap-place', swap)
    }



    if (e.target.value === 'false') {
      this.setState({
        replace: true
      })
      let swap = {
        replace: this.state.replace
      };
      socket.emit('swap-place', swap)
    }
  }

  render() {
    return (
      <div className="swap-button">
        <button onClick={this.ToggleSwitchPlace} onChange={this.ToggleSwitchPlace} value={this.state.replace}>Swap</button>
      </div>
    );
  }
}

export default SwitchPlace;