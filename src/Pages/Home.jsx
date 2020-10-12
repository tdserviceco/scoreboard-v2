import React, { Component } from 'react';
import RenderPlayer1Name from '../Components/RenderPlayer1Name';
import RenderPlayer1Country from '../Components/RenderPlayer1Country';
import RenderPlayer2Name from '../Components/RenderPlayer2Name';
import RenderPlayer2Country from '../Components/RenderPlayer2Country';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <RenderPlayer1Name />
        <RenderPlayer1Country />
        <RenderPlayer2Name />
        <RenderPlayer2Country />

      </div>
    );
  }
}

export default Home;