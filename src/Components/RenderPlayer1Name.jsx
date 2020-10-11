
import React, { Component } from 'react';
import io from "socket.io-client";
const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/"
const socket = io.connect(LOCALHOST);
class RenderNameOfPlayer1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: ''
    };
  }

  componentDidMount() {
    socket.on("player1name", ({ name }) => {
      this.setState({
        player: name
      })
    })
  }

  renderNameOfPlayer(player) {
    if(player === "" || player === "empty" ) {
      return <h3>team | player1</h3>
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

export default RenderNameOfPlayer1;