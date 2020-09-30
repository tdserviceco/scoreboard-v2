import React, { Component } from 'react';
class Countries extends Component {

  constructor() {
    super();
    this.state = {
      country: {}
    }
  }

  componentDidMount() {
    alert("hello");
  }


  render() {
    return (

      <label htmlFor="countries" >
        Country
        <select id="countries" onChange={this.handleCountry}>
          
        </select>
      </label>
    );
  }
}


export default Countries;
