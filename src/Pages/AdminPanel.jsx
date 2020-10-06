import React, { Component } from 'react';
import SelectPlayer from '../Components/SelectPlayer';
// import FreeTypingPlayer from '../Components/FreeTypingPlayer';
import Scores from '../Components/Scores';
import SwapPlace from '../Components/SwapPlace'

class AdminPanel extends Component {
  render() {
    return (
      <div className="admin-panel">
        <div className="P1-settings">
          <SelectPlayer player="1" />
          {/* <FreeTypingPlayer player="1" /> */}
          <Scores player="1" />
        </div>
        <div className="P2-settings">
          <SelectPlayer player="2" />
          {/* <FreeTypingPlayer player="2" /> */}
          <Scores player="2" />
        </div>
        <SwapPlace />
      </div>
    
    );
  }
}

export default AdminPanel;