import Axios from 'axios';
import React, { Component } from 'react';
import io from "socket.io-client";
const LOCALHOST = "localhost:5100";
const DOMAIN = "https://xbox-socket-io.herokuapp.com/"
const socket = io.connect(DOMAIN);

class ManuallyTypePlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countriesData: [{}],
      p1Name: '',
      p2Name: '',
      p1Country: '',
      p2Country: ''
    };
  }


  getAllCountries = async () => {
    let url = 'https://restcountries.eu/rest/v2/all?codes;';
    let response = await Axios.get(url);
    return response
  }

  componentDidMount = () => {
    this.getAllCountries().then(res => {
      this.setState({
        countriesData: res.data
      })
    }).catch(issues => {
      console.error(issues)
    })
  }

  nameChangeHandler = (e) => {

    if (this.props.player.toLowerCase() === 'player-1') {
      this.setState({
        p1Name: e.target.value
      }, () => {
        const { p1Name } = this.state;
        const IOpackage = {
          playerID: this.props.player,
          name: p1Name
        }
        socket.emit('player', IOpackage)
      })

    }

    else {
      this.setState({
        p2Name: e.target.value
      }, () => {
        const { p2Name } = this.state;
        const IOpackage = {
          playerID: this.props.player,
          name: p2Name
        }
        socket.emit('player', IOpackage)
      })

    }
  }

  displayAllCountries = () => {
    const countryData = this.state.countriesData;
    let countries = countryData.sort((a, b) => a.name.localeCompare(b.name, 'sv')).map((item, key) => <option key={key} value={item.alpha2Code}>{item.name}</option>);
    return countries;
  }


  countryChange = (e) => {
    if (this.props.player.toLowerCase() === 'player-1') {
      this.setState({
        p1Country: e.target.value
      }, () => {
        const IOpackage = {
          playerID: this.props.player,
          country: this.state.p1Country
        }
        socket.emit('player-country', IOpackage)

      })
    }
    else {
      this.setState({
        p2Country: e.target.value
      }, () => {
        const IOpackage = {
          playerID: this.props.player,
          country: this.state.p2Country
        }
        socket.emit('player-country', IOpackage)
      })
    }
  }


  render() {
    if (this.props.player.toLowerCase() === 'player-1') {
      return (
        <div className={`${this.props.player.toLowerCase()}`}>
          <form className={`${this.props.player.toLowerCase()}-form`}>
            <label className="form-label" htmlFor="p1Name">{this.props.player} Name</label>
            <input id="p1Name" type="text" placeholder="Clan/Team | Player-1 name" onChange={this.nameChangeHandler} />
            <label className="form-label" htmlFor="p1Name">{this.props.player} Country</label>
            <select className="form-select" onChange={this.countryChange}>
              <option value={this.props.player}>Please select country</option>
              {this.displayAllCountries()}
            </select>
          </form>
        </div>
      );
    }
    else {
      return (
        <div className={`${this.props.player.toLowerCase()}`}>
          <form className={`${this.props.player.toLowerCase()}-form`}>
            <label className="form-label" htmlFor="p2Name">{this.props.player} Name</label>
            <input id="p2Name" type="text" placeholder="Clan/Team | Player-2 name" onChange={this.nameChangeHandler} />
            <label className="form-label" htmlFor="p2Name">{this.props.player} Country</label>
            <select className="form-select" onChange={this.countryChange}>
              <option value={this.props.player}>Please select country</option>
              {this.displayAllCountries()}
            </select>
          </form>
        </div>
      );
    }
  }
}

export default ManuallyTypePlayer;