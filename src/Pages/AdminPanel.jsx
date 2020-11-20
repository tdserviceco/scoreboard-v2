import React, { Component } from 'react';
// import PlayerSelect from '../Components/PlayerSelect';
import SwapButton from '../Components/SwapButton';
import ScoreHandler from '../Components/ScoreHandler';
import ManuallyTypePlayer from '../Components/ManuallyTypePlayer';
import RoundText from '../Components/RoundText';
import io from "socket.io-client";
const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/"
const socket = io.connect(LOCALHOST);
class AdminPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: true,
      values: [
        // { name: 'Street Fighter 3rd Strike', code: 'sf3s' },
        { name: 'Samurai Shodown', code: 'shamsho' },
        // { name: 'Soul Calibur 6', code: 'sc6' },
        // { name: 'Dragon Ball Fighterz', code: 'dbfz' },
        { name: 'Tekken 7', code: 't7' }
      ]
    };
  }

  optionTemplate = () => {
    return this.state.values.map((value, key) => <option key={key} value={value.code}>{value.name}</option>)
  }

  handleFilter = (e) => {
    const game = e.target.value;
    socket.emit('filter-to-game', game)
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
          <SwapButton />

        </div>
        <div className="admin-panel-right">
          <label htmlFor="filter-of-games">Filter for games: </label>
          <select id="filter-of-games" onChange={this.handleFilter} value={this.state.value} className="filter-to-css">
            <option value="empty">Choose a game layout</option>
            {this.optionTemplate()}
          </select>
        </div>
      </div>
    );
  }
}

export default AdminPanel;