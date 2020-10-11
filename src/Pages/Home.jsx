import React, { Component } from 'react';
import RenderNameOfPlayer1 from '../Components/RenderPlayer1Name';
import RenderNameOfPlayer2 from '../Components/RenderPlayer2Name';


class Home extends Component {
  render() {
    return (
      <div className="home">
        <RenderNameOfPlayer1 />
        <RenderNameOfPlayer2 />

      </div>
    );
  }
}

export default Home;