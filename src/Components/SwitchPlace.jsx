import React, { Component } from 'react';

class SwitchPlace extends Component {

  constructor(props) {
    super(props);

    this.state = {
      switched: false,
      p1: [{}],
      p2: [{}]
    };
  }

  ToggleSwitchPlace = (e) => {

  }

  render() {
    return (
      <div>
        <button onClick={this.ToggleSwitchPlace} value="switch">Switch</button>
      </div>
    );
  }
}

export default SwitchPlace;