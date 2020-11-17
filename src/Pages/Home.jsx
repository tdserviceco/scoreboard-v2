import React, { Component } from 'react';
import RenderPlayer1Name from '../Components/RenderPlayer1Name';
import RenderPlayer1Country from '../Components/RenderPlayer1Country';
import RenderPlayer1Score from '../Components/RenderPlayer1Score';
import RenderPlayer2Score from '../Components/RenderPlayer2Score';
import RenderPlayer2Name from '../Components/RenderPlayer2Name';
import RenderPlayer2Country from '../Components/RenderPlayer2Country';
import RendeRroundCall from '../Components/RenderRoundCall';
import io from "socket.io-client";
// const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/"
const socket = io.connect(DOMAIN);

class Home extends Component {
  // Special fix for not displaying round caller
  constructor(props) {
    super(props);

    this.state = {
      roundTextValue: ''
    };
  }

  componentDidMount = () => {
    socket.on("roundCallText", (roundCallPackage) => {
      this.setState({
        roundTextValue: roundCallPackage.roundTextValue
      })
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <div className="player-1-field">
          <RenderPlayer1Country />
          <RenderPlayer1Name />
          <RenderPlayer1Score />
        </div>
        <div className={`rounds-field ${this.state.roundTextValue ? '' : 'hide'}`} >
          <RendeRroundCall />
        </div>
        <div className="player-2-field">
          <RenderPlayer2Score />
          <RenderPlayer2Name />
          <RenderPlayer2Country />
        </div>
      </div>
    );
  }
}

export default Home;