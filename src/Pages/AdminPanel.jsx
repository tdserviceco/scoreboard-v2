import React, { Component } from 'react';
import PlayerSelect from '../Components/PlayerSelect';
class AdminPanel extends Component {
  render() {
    return (
      <div className="admin-panel">
        <PlayerSelect player="Player-1" />
        <PlayerSelect player="Player-2" />
      </div>
    );
  }
}

export default AdminPanel;