import React, { Component } from 'react';
import Axios from "axios";
import io from "socket.io-client";
const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/"
const socket = io.connect(LOCALHOST);

class SelectPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [],
      playerID: 'player-' + props.player,
      playerName: '',
      playerCountry: '',
      currentValue: props.currentValue
    };
  }


  fetchPlayers() {
    Axios.get('http://localhost:5100/api/players')
      .then(res =>
        this.setState({
          players: res.data
        })
      ).catch(
        error => console.log(error)
      ).then(() => {

      })
  }

  renderListOfPlayers(player) {

    let players = this.state.players.sort((a, b) => a.name.localeCompare(b.name)).map((item, key) => <option key={key} value={player + "," + item.name + "," + item.country}>{item.name}</option>);
    return players
  }

  onSelectChange = (e) => {
    let split = e.target.value.split(",")
    //check who is who (p1 or p2)

    Axios.get('https://xbox-socket-io.herokuapp.com/api/player/' + split[0] + "&" + split[1] + '&' + split[2])
      .then(res =>

        this.setState({
          playerName: res.data.player,
          playerCountry: res.data.code
        })
      ).catch(
        error => console.log(error)
      ).then(() => {
        //Always execute
        const { playerID, playerName, playerCountry } = this.state;
        socket.emit('player', {
          id: playerID,
          name: playerName,
          code: playerCountry
        })
      })

  }

  componentDidMount() {
    this.fetchPlayers();
  }

  render() {
    const { playerID } = this.state;

    return (
      <>
        <select className={`swap-box-${playerID}`} onChange={this.onSelectChange}>
          <option value={`${playerID},team | ${playerID},XB`}>Select player</option>
          {this.renderListOfPlayers(playerID)}
        </select>
      </>
    );
  }
}

export default SelectPlayer;