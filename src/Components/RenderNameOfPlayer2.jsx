import React, { Component } from 'react';
import io from "socket.io-client";
const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-websocket-io.herokuapp.com/"
const socket = io.connect(LOCALHOST);
class RenderNameOfPlayer2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: ''
    };
  }

  componentDidMount() {
    socket.on("player2name", ({ name }) => {
      console.log(name)
      this.setState({
        player: name
      })
    })
  }

  renderNameOfPlayer(player) {
    if (player === "") {
      return <h3>Team | Player2</h3>
    }
    return (
      <h3>
        {player}
      </h3>
    )
  }

  render() {
    const { player } = this.state;
    return (
      <>
        {this.renderNameOfPlayer(player)}
      </>
    );
  }
}

export default RenderNameOfPlayer2;