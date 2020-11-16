import React, { Component } from 'react';
import Axios from "axios";
import io from "socket.io-client";
// const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/";
const socket = io.connect(DOMAIN);
class PlayerSelect extends Component {

  constructor(props) {
    super(props);

    this.state = {
      playerID: props.player,
      players: [],
      value: [],

    };
  }

  getPlayer = async () => {
    let fetchStuff = await Axios.get('http://localhost:5100/api/players')
    return fetchStuff;
  }

  listOfPlayers = (playerID) => {
    const player = this.state.players;
    let players = player.sort((a, b) => a.name.localeCompare(b.name, 'sv')).map((item, key) => <option key={key} value={playerID + "," + item.name + "," + item.country}>{item.name}</option>);
    return players;
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

  componentDidMount = () => {
    this.getPlayer().then(repsonse => {
      this.setState({
        players: repsonse.data
      })
      console.log(this.state)
    }).catch(error => console.error(error))
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
    )
  }
}

export default PlayerSelect;