import React, { Component } from "react";
import RenderNameOfPlayer1 from 'Components/RenderNameOfPlayer1';
import RenderCountryOfPlayer1 from 'Components/RenderCountryOfPlayer1';
import RenderScoreOfPlayer1 from 'Components/RenderScoreOfPlayer1';

import RenderNameOfPlayer2 from 'Components/RenderNameOfPlayer2';
import RenderCountryOfPlayer2 from 'Components/RenderCountryOfPlayer2';
import RenderScoreOfPlayer2 from 'Components/RenderScoreOfPlayer2';

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