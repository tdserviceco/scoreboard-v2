import React, { Component } from 'react';
// import PlayerSelect from '../Components/PlayerSelect';
import SwapButton from '../Components/SwapButton';
import ScoreHandler from '../Components/ScoreHandler';
import ManuallyTypePlayer from '../Components/ManuallyTypePlayer';
import RoundText from '../Components/RoundText';
class AdminPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: true,
    };
  }


  render() {
    return (

      <div className="admin-panel">
        <div className="admin-panel-left">

          <div className="player-one-settings">
            {/* <PlayerSelect player="Player-1" /> */}
            <ManuallyTypePlayer player="Player-1" />
            <ScoreHandler player="Player-1" />
          </div>

          <hr />
          <RoundText />
          <hr />
          
          <div className="player-two-settings">
            {/* <PlayerSelect player="Player-2" /> */}
            <ManuallyTypePlayer player="Player-2" />
            <ScoreHandler player="Player-2" />
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