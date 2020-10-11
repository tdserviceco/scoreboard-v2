import React, { Component } from 'react';
import io from "socket.io-client";
import PlayerSelect from '../Components/PlayerSelect';
const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/";
const socket = io.connect(LOCALHOST);
class AdminPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      replace: false
    };
  }

  swapPlace = (e) => {
    if(e.target.value === 'false') {
      this.setState({
        replace: true
      })
      console.log(e.target.value)
    }
   
    if(e.target.value === 'true') {
      this.setState({
        replace: false
      })
      console.log(e.target.value)
    }

    const {replace} = this.state;
    socket.emit('swap-place', replace)
  }

  render() {
    return (
      <div className="admin-panel">
        <PlayerSelect player="Player-1" />
        <PlayerSelect player="Player-2" />
        <button type="button" className="btn swap" value={this.state.replace} onChange={this.swapPlace} onClick={this.swapPlace}>Swap</button>
      </div>
    );
  }
}

export default AdminPanel;