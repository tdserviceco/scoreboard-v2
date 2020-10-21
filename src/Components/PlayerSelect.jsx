import React, { Component } from 'react';
import Axios from "axios";
import io from "socket.io-client";
const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/";
const socket = io.connect(LOCALHOST);
class PlayerSelect extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playerID: props.player,
      players: [],
      value: [],
      playerName: '',
      playerCountry: ''
    };
  }

  async getPlayers() {
    let fetchStuff = await Axios.get('http://localhost:5100/api/players')
    return fetchStuff;
  }

  choosePlayer = (e) => {
    const split = e.target.value.split(',');
    this.setState({
      value: split
    })
    Axios.get('http://localhost:5100/api/player/' + split[0] + "&" + split[1] + '&' + split[2]).then(res =>
      this.setState({
        playerName: res.data.player,
        playerCountry: res.data.code
      })
    ).catch(
      error => console.log(error)
    ).then(() => {
      //Always execute
      const { playerID, playerName, playerCountry } = this.state;
      socket.emit('player', { playerID, playerName, playerCountry })
    })
  }

  listOfPlayers(playerID) {
    let players = this.state.players.sort((a, b) => a.name.localeCompare(b.name)).map((item, key) => <option key={key} value={playerID + "," + item.name + "," + item.country}>{item.name}</option>);
    return players
  }

  componentDidMount() {
    this.getPlayers()
      .then(result => {
        this.setState({
          players: result.data
        })
      })
      .catch(err => { console.error(err) })
  }

  render() {
    const { playerID } = this.state;
    return (
      <>
        <h3>{playerID}</h3>
        <select onChange={this.choosePlayer}>
          <option value={`${playerID},${playerID},XB`}>Select player</option>
          {this.listOfPlayers(playerID)}
        </select>
      </>
    );
  }
}

export default PlayerSelect;