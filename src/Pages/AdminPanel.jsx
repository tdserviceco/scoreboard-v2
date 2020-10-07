import React, { Component } from 'react';
import SelectPlayer from '../Components/SelectPlayer';
// import FreeTypingPlayer from '../Components/FreeTypingPlayer';
import Scores from '../Components/Scores';
import SwapPlace from '../Components/SwapPlace'

import io from "socket.io-client";
const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/"
const socket = io.connect(LOCALHOST);

class AdminPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      swap: false,
      currentValue: ''
    };
  }


  componentDidMount() {
    socket.on("swap-place", swap => {
      this.setState({
        swap: swap.replace
      })
    })
  }


  render() {
    const {swap} = this.state
    return (
      <div className="admin-panel">
        
        <div className="P1-settings">
          {!swap && <SelectPlayer player="1" currentValue={this.state.currentValue} />}
          {swap && <SelectPlayer player="2" currentValue={this.state.currentValue} />}
          {/* <FreeTypingPlayer player="1" /> */}
          <Scores player="1" />
        </div>
        <div className="P2-settings">
          {!swap && <SelectPlayer player="2" currentValue={this.state.currentValue} />}
          {swap && <SelectPlayer player="1" currentValue={this.state.currentValue} />}
          {/* <FreeTypingPlayer player="2" /> */}
          <Scores player="2" />
        </div>
        <SwapPlace />
      </div>

    );
  }
}

export default AdminPanel;