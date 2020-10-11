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
      replace: props.replace
    };
  }

  async getPlayers() {
    let fetchStuff = await Axios.get('http://localhost:5100/api/players')
    return fetchStuff;
  }

  choosePlayer = (e) => {
    console.log(e.target.value)
    const split = e.target.value.split(',');
    console.log("Split:", split)
    this.setState({
      value: split
    })
    console.log("Value:", this.state.value)
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
    const { playerID, value } = this.state;
    console.log(value);
    return (
      <>
        <select onChange={this.choosePlayer}>
          <option value={`${playerID},${playerID},XB`}>Select player</option>
          {this.listOfPlayers(playerID)}
        </select>
      </>
    );
  }
}

export default PlayerSelect;