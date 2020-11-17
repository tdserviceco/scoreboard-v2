import React, { Component } from 'react';
import io from "socket.io-client";
// const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/"
const socket = io.connect(DOMAIN);
class RoundText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      roundText: '',
      roundTextValue: false
    };
  }

  componentDidMount = () => {
    this.launchRoundText();
  }

  launchRoundText = () => {
    const IOPackage = {
      roundTextValue: this.state.roundTextValue,
      roundText: this.state.roundText
    }
    console.log(IOPackage)
    socket.emit('roundText', IOPackage)
  }

  changeRoundTextHandler = (e) => {
    if (e.target.value === '') {
      this.setState({
        roundTextValue: false,
        roundText: ''
      })
    }
    else {
      this.setState({
        roundTextValue: true,
        roundText: e.target.value
      }, () => {

        const IOPackage = {
          roundTextValue: this.state.roundTextValue,
          roundText: this.state.roundText
        }
        socket.emit('roundText', IOPackage)

      })
    }

  }

  render() {
    return (
      <div className="round-text">
        <form>
          <label htmlFor="roundText">Round Text: </label>
          <input id="roundText" type="text" value={this.state.roundText} onChange={this.changeRoundTextHandler} placeholder="Ex: Losers Final" />
        </form>
      </div>
    );
  }
}

export default RoundText;