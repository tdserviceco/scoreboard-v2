import React, { Component } from 'react';
import PlayerSelect from '../Components/PlayerSelect';
import SwapButton from '../Components/SwapButton';
import ScoreHandler from '../Components/ScoreHandler';
class AdminPanel extends Component {


  render() {
    return (
      <div className="admin-panel">
        <div className="player-one-settings">
          <PlayerSelect player="Player-1" />
          <ScoreHandler player="Player-1" />
        </div>
        <div className="player-two-settings">
          <PlayerSelect player="Player-2" />
          <ScoreHandler player="Player-2" />
        </div>

        <SwapButton />
      </div>
    );
  }
}

export default AdminPanel;