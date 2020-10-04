import React, { Component } from 'react';
import io from "socket.io-client";
import Axios from "axios";

class SelectPlayer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      players: [],
      playerID: 'player-' + props.player,
      playerName: '',
      playerCountry: ''
    };
  }


  fetchPlayers() {
    Axios.get('https://xbox-socket-io.herokuapp.com/api/players')
      .then(res =>
        this.setState({
          players: res.data,
        })
      ).catch(
        error => console.log(error)
      ).then(() => {

      })
  }

  renderListOfPlayers(player) {
    return this.state.players.map((item, key) => <option key={key} value={player + "," + item.name + "," + item.country}>{item.name}</option>);
  }

  onSelectChange = (e) => {
    let split = e.target.value.split(",");
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
        const LOCALHOST = "localhost:5100";
        const DOMAIN = "https://xbox-websocket-io.herokuapp.com/"
        const socket = io.connect(DOMAIN);
        socket.emit('player', {
          id: playerID,
          name: playerName,
          code: playerCountry
        })
        socket.on('player', (data) => {
          console.log(data)
        })
      })
  }

  componentDidMount() {
    this.fetchPlayers();
  }

  render() {
    const { playerID } = this.state;
    return (
      <select onChange={this.onSelectChange}>
        <option defaultValue>Select player</option>
        {this.renderListOfPlayers(playerID)}

      </select>
    );
  }
}

export default SelectPlayer;