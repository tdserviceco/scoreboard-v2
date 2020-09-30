import React, { Component } from 'react';
import "./Home.css";
import Logotype from "../Img/XbF_FGC_Logo.png"; 

class Home extends Component {

  render() {

    return (
      <div className="frontend">
        <div className="scoreboard-layout container">
         
        </div>
        <div className="logotype-block">
          <img src={Logotype} alt="Xbox FGC " className="logo" />
        </div>
      </div>
    );
  }
}
export default Home;