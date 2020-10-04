import React, { Component } from 'react';
import "./ScoreHandler.css";
import io from "socket.io-client";
let replaceScoreP1 = 0,
  replaceScoreP2 = 0;

class Scores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scoreP1: replaceScoreP1,
      scoreP2: replaceScoreP2,
      player: "player-" + props.player
    };
  }
  render() {
    return (
      <>
      </>
    );
  }
}

export default Scores;