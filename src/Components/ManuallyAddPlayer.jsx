import React, { Component } from 'react';
import io from "socket.io-client";
const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/"
const socket = io.connect(LOCALHOST);
class ManuallyAddPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }

  changeMe = (e) => {
    const {checked} = this.state;
    if (e.target.value === 'true') {
      this.setState({
        checked: false
      })
   
      socket.emit('last minute', (checked));
    }
    if (e.target.value === 'false') {
      this.setState({
        checked: true
      })
      socket.emit('last minute', (checked));
    }
    console.log(this.state.checked)
  }

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.changeMe} value={this.state.checked} /> {this.props.player}
      </div>
    );
  }
}

export default ManuallyAddPlayer;