import React, { Component } from 'react';
import RenderNameOfPlayer1 from '../Components/RenderPlayer1Name';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <RenderNameOfPlayer1 />
      </div>
    );
  }
}

export default Home;