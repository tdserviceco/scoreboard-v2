import React, { Component } from 'react';
import io from "socket.io-client";
const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/"
const socket = io.connect(LOCALHOST);

class RenderRoundCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roundText: '',
      roundTextValue: ''
    };
  }

  componentDidMount = () => {
    socket.on("roundCallText", (roundCallPackage) => {
      this.setState({
        roundText: roundCallPackage.roundText,
        roundTextValue: roundCallPackage.roundTextValue
      })
    })
  }
  render() {
    const { roundText } = this.state
    return (
      <>
        <h2>{roundText}</h2>
      </>
    )
  }
}

export default RenderRoundCall;