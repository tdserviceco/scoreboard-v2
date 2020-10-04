import React, { Component } from "react";
import RenderNameOfPlayer1 from 'RenderNameOfPlayer1';
import RenderCountryOfPlayer1 from 'RenderCountryOfPlayer1';
import RenderScoreOfPlayer1 from 'RenderScoreOfPlayer1';

import RenderNameOfPlayer2 from 'RenderNameOfPlayer2';
import RenderCountryOfPlayer2 from 'RenderCountryOfPlayer2';
import RenderScoreOfPlayer2 from 'RenderScoreOfPlayer2';

class Home extends Component {

  render() {
    return (
      <>
        <RenderCountryOfPlayer1 />
        <RenderNameOfPlayer1 />
        <RenderScoreOfPlayer1 />
        {/* <RenderRound /> */}
        <RenderScoreOfPlayer2 />
        <RenderNameOfPlayer2 />
        <RenderCountryOfPlayer2 />

      </>
    );
  }

  
}

export default Home;