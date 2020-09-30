import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './SettingsLogin.css';
class SettingsLogin extends Component {

  constructor () {
    super();
    this.state = {
      name: '',
      pwrd: '',
      fireRedirect: false
    }
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handlePassWord = (e) => {
    this.setState({
      pwrd: e.target.value
    })
  }

  submitForm = (e) => {
    e.preventDefault()
    const {name, pwrd} = this.state;
    if(name !=='xboxfighters' || pwrd !== "xboxfighters2020") {
      alert("Not enough DP!")
    }
    else {
     this.setState({
       fireRedirect: true
     })
    }
   
  }
  

  render() {
    const { fireRedirect} = this.state;
    return (
      <div className="form-login">
        <form className="form-login-container container" onSubmit={this.submitForm}>
          <label htmlFor="name">
            Name:
            <input type="text" className="name" id="name" name="name" value={this.state.nameValue} onChange={this.handleName} placeholder="Random-DP" />
          </label>
          <label htmlFor="pwrd">
            Password:
            <input type="password" className="pwrd" id="pwrd" value={this.state.pwrdValue} onChange={this.handlePassWord} name="pwrd" placeholder="Im-doing-random-DP"/>
          </label>
          <input type="submit" value="Login" />
        </form>
        {fireRedirect && (
          <Redirect to={'/admin/settings/panel'} />
        )}
      </div>
    );
  }
}

export default SettingsLogin;