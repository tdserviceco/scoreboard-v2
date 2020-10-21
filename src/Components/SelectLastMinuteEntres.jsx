import React, { Component } from 'react';
import ManuallyAddPlayer from '../Components/ManuallyAddPlayer';

class SelectLastMinuteEntres extends Component {

  render() {
    return (
      <div>
        <h3>Last minute entres (P1 and P2)</h3>
        <ManuallyAddPlayer player="Player-1" />
        <ManuallyAddPlayer player="Player-2" />
      </div>
    );
  }
}

export default SelectLastMinuteEntres;