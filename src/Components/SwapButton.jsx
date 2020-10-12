import React, { Component } from 'react';
import io from "socket.io-client";
const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/";
const socket = io.connect(LOCALHOST);
class SwapButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      replace: false
    };
  }

  swapPlace = (e) => {
    if (e.target.value === 'false') {
      this.setState({
        replace: true
      })
      console.log(e.target.value)
    }

    if (e.target.value === 'true') {
      this.setState({
        replace: false
      })
      console.log(e.target.value)
    }

    const { replace } = this.state;
    socket.emit('swap-place', replace)
  }
  render() {
    return (
      <button type="button" className="btn swap" value={this.state.replace} onChange={this.swapPlace} onClick={this.swapPlace}>Swap</button>
    );
  }
}

export default SwapButton;