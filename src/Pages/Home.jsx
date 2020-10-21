import React, { Component } from 'react';
import RenderPlayer1Name from '../Components/RenderPlayer1Name';
import RenderPlayer1Country from '../Components/RenderPlayer1Country';
import RenderPlayer1Score from '../Components/RenderPlayer1Score';
import RenderPlayer2Score from '../Components/RenderPlayer2Score';
import RenderPlayer2Name from '../Components/RenderPlayer2Name';
import RenderPlayer2Country from '../Components/RenderPlayer2Country';


class Home extends Component {
  render() {
    return (
      <div className="scoreboard">
        <div className="player-1-field">
          <RenderPlayer1Country />
          <RenderPlayer1Name />
          <RenderPlayer1Score />
        </div>
        <div className="rounds-field">
          <h2>Grand finals</h2>
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