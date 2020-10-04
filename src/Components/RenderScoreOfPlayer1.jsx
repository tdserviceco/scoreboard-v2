import React, { Component } from 'react';
import io from "socket.io-client";
const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/"
const socket = io.connect(DOMAIN);

class RenderScoreOfPlayer1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: ''
    };
  }


  componentDidMount() {
    socket.on("player1Score", ({ replaceScoreP1 }) => {
      this.setState({
        score: replaceScoreP1
      })
    })
  }



  RenderScoreOfPlayer(score) {
    if (score === '') {
      return <h3>0</h3>
    }
    return (
      <h3>{this.state.score}</h3>
    )
  }


  render() {
    const {score} = this.state;
    return (
      <div className="score">
        {this.RenderScoreOfPlayer(score)}
      </div>
    );
  }
}

export default RenderScoreOfPlayer1;