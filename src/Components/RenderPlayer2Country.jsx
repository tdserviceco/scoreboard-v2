import React, { Component } from 'react';
import io from "socket.io-client";
const flagPath = process.env.PUBLIC_URL + '/assets/img/flags';
const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/"
const socket = io.connect(LOCALHOST);
class RenderPlayer2Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryP1: '',
      countryP2: '',
      swap: true
    };
  }

  componentDidMount() {
    socket.on("swap-place", (swap) => {
      this.setState({
        swap: swap
      })
    })
    
    socket.on("player2country", ({ country }) => {
      this.setState({
        countryP2: country
      })
    })

    socket.on("player1country", ({ country }) => {
      this.setState({
        countryP1: country
      })
    })
  }

  renderCountryOfPlayer(countryP1, countryP2) {
    const { swap } = this.state;
    if (swap) {
      if (countryP2 === "" || countryP2 === undefined) {
        return <img src={`${flagPath}/XB.png`} alt="xbox flag" />
      }
      return (
        <img src={`${flagPath}/${countryP2}`} alt="Country flag P2" />
      )
    }
    if (swap === false) {
      if (countryP1 === "" || countryP1 === undefined) {
        return <img src={`${flagPath}/XB.png`} alt="xbox flag" />
      }
      return (
        <img src={`${flagPath}/${countryP1}`} alt="Country flag P1" />
      )
    }
  }


  render() {
    const { countryP1, countryP2 } = this.state;
    return (
      <>
        {this.renderCountryOfPlayer(countryP1, countryP2)}
      </>
    );
  }
}

export default RenderPlayer2Country;