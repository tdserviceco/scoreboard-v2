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

  ChangeValue = (e) => {
 
    const { player } = this.state;
    const LOCALHOST = "localhost:5100";
    const DOMAIN = "https://xbox-socket-io.herokuapp.com/"
    const socket = io.connect(DOMAIN);
    
    if (player === "player-1") {
      if (e.target.value === '+') {
        replaceScoreP1++
      
        this.setState({
          scoreP1: replaceScoreP1
        })

        socket.emit('playerScore', { player, replaceScoreP1 })
      }
      if (e.target.value === '-') {
        replaceScoreP1--
        console.log(replaceScoreP1);
        this.setState({
          scoreP1: replaceScoreP1
        })
        socket.emit('playerScore', { player, replaceScoreP1 })
      }
    }
    if (player === "player-2") {
      if (e.target.value === '+') {
        replaceScoreP2++
      
        this.setState({
          scoreP2: replaceScoreP2
        })

        socket.emit('playerScore', { player, replaceScoreP2 })
      }
      if (e.target.value === '-') {
        replaceScoreP2--
        console.log(replaceScoreP2);
        this.setState({
          scoreP2: replaceScoreP2
        })
        socket.emit('playerScore', { player, replaceScoreP2 })
      }
    }
  }

  render() {
    if (this.props.player === "1") {
      return (
        <div className={`scorehandler-wrapper player-${this.props.player}`}>
          <input type="text" value={this.state.scoreP1} onChange={this.ChangeValue} />
          <div className="quantity-nav">
            <button className="quantity-button quantity-up" value="+" onClick={this.ChangeValue}>+</button>
            <button className="quantity-button quantity-down" value="-" onClick={this.ChangeValue}>-</button>
          </div>
        </div>
      );
    }
    if (this.props.player === "2") {
      return (
        <div className={`scorehandler-wrapper player-${this.props.player}`}>
          <input type="number" value={this.state.scoreP2} onChange={this.ChangeValue} />
          <div className="quantity-nav">
            <button className="quantity-button quantity-up" value="+" onClick={this.ChangeValue}>+</button>
            <button className="quantity-button quantity-down" value="-" onClick={this.ChangeValue}>-</button>
          </div>
        </div>
      );
    }
    else return null;
  }
}

export default Scores;