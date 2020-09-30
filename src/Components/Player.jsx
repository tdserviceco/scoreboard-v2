import React, { Component } from 'react';
import Axios from 'axios';
import io from 'socket.io-client';
const local = "localhost:5100";
class Player extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [],
      player: []
    }
  }
  /** Get players then we use the info to just get one player per side */
  getPlayers() {
    Axios.get('https://xbox-socket-io.herokuapp.com/api/players')
      .then(res =>
        this.setState({
          players: res.data,
        })
      ).catch(
        error => console.log(error)
      ).then(() => {
        //Always execute
      })
  }

  handleChange = (e) => {
    let split = e.target.value.split(",");
    //check who is who (p1 or p2)
    Axios.get('https://xbox-socket-io.herokuapp.com/api/player/' + this.props.player + "&" + split[0] + '&' + split[1])
      .then(res =>
        this.setState({
          player: res.data
        })
      ).catch(
        error => console.log(error)
      ).then(() => {
        //Always execute
        console.log(this.state.player)
        const socket = io.connect(local);
        socket.emit('server', {value : this.state.player})
      })
     
  }

  componentDidMount() {
    this.getPlayers()
  }
  render() {
    return (
      <>
        <div className={this.props.player === 'player-1' ? 'player-1' : '' || this.props.player === 'player-2' ? 'player-2' : ''}>
          <h3>
            {this.props.player}
          </h3>
          <select onChange={this.handleChange}>
            <option defaultValue="none">Select Player</option>
            {renderListOfPlayer(this.state.players)}
          </select>
        </div>
      </>
    );
  }
}

function renderListOfPlayer(items) {
  //console.log(items)
  let key = 1;
  let ids = items.map(item => <option key={key++} value={item.name + "," + item.country + ","}>{item.name}</option>);
  return ids;
}


export default Player;
