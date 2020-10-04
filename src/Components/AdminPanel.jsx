import React, { Component } from "react";
import SelectPlayer from 'SelectPlayer';
import ScoreHandler from 'ScoreHandler';
import SwitchPlace from 'SwitchPlace';

class AdminPanel extends Component {

  render() {
    return (
      <div className="admin-panel">
        <div className="P1-settings">
          <SelectPlayer player="1" />
          <ScoreHandler player="1" />
        </div>
        <div className="Switch-me">
          <SwitchPlace />
        </div>
        <div className="P2-settings">
          <SelectPlayer player="2" />
          <ScoreHandler player="2" />
        </div>

      </div>
    );
  }
}

export default AdminPanel;