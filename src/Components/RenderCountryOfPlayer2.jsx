import React, { Component } from 'react';
import io from "socket.io-client";
const flagPath = process.env.PUBLIC_URL + '/assets/img/flags';
const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-websocket-io.herokuapp.com/"
const socket = io.connect(DOMAIN);
class RenderCountryOfPlayer2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: ''
    };
  }

  componentDidMount() {
    socket.on("player2country", ({country }) => {
      this.setState({
        country: country
      })
    })
  }

  renderCountryOfPlayer(country) {
    if(country === "") {
      return <img src={`${flagPath}/XB.png`} alt="xbox flag" />
    }
    return (
      <img src={`${flagPath}/${country}`} alt="Country flag" />
    )
  }


  render() {
    const {country} = this.state;
    return (
      <>
        {this.renderCountryOfPlayer(country)}
      </>
    );
  }
}

export default RenderCountryOfPlayer2;