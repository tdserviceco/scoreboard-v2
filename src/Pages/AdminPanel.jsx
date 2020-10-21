import React, { Component } from 'react';
import PlayerSelect from '../Components/PlayerSelect';
import SwapButton from '../Components/SwapButton';
import ScoreHandler from '../Components/ScoreHandler';
import SelectLastMinuteEntres from '../Components/SelectLastMinuteEntres';
class AdminPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }

  changeMe = (e) => {
    if (e.target.value === 'true') {
      this.setState({
        checked: false
      })
    }
    if (e.target.value === 'false') {
      this.setState({
        checked: true
      })
    }
    
  }

  render() {
    return (
      <div className="admin-panel">
        <div className="admin-panel-left">
          <div className="player-one-settings">
            <PlayerSelect player="Player-1" />
            <ScoreHandler player="Player-1" />
          </div>
          <div className="player-two-settings">
            <PlayerSelect player="Player-2" />
            <ScoreHandler player="Player-2" />
          </div>
          <div className="last-minute-entres">
            <SelectLastMinuteEntres />
          </div>
        </div>
        <div className="admin-panel-right">
          <SwapButton />
        </div>
      </div>
    );
  }
}

export default AdminPanel;