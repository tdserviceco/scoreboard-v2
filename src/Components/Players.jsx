import React, { Component } from 'react';
import Player from '../Components/Player';
class Players extends Component {

  render() {
    return (
      <>
       {this.props.player === 'p1' && (<Player player='player-1'/>)}
       {this.props.player === 'p2' && (<Player player='player-2'/>)}
      </>
    );
  }
}


export default Players;
