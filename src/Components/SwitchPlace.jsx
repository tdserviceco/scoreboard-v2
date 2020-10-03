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
    if (e.target.value === 'true') {
      this.setState({
        replace: false
      })
      console.log("im False: " + this.state.replace)
    }
    if (e.target.value === 'false') {
      this.setState({
        replace: true
      })
      console.log("im true: " + this.state.replace)
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