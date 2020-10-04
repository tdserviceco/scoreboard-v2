import React, { Component } from 'react';
import SelectPlayer from '../Components/SelectPlayer';
import ScoreHandler from '../Components/ScoreHandler';
class AdminPanel extends Component {
  render() {
    return (
      <div className="admin-panel">
        <div className="P1-settings">
          <SelectPlayer player="1" />
          <ScoreHandler player="1" />
        </div>
      </div>
    );
  }
}

export default AdminPanel;