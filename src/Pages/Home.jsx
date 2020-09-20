import React, { Component } from 'react';
import "./Home.css";
import DemoFlagP1 from "../Img/Flags/se.png";
import DemoFlagP2 from "../Img/Flags/xbox.png";

class home extends Component {
  render() {
    return (
      <main className="frontend">
        <div className="scoreboard-layout sc6">
          <section className="player-1">
            <div className="player-1-country">
              <div class="country-flag"><img src={DemoFlagP1} alt="Sweden" /></div>
            </div>
            <div className="player-1-sponsor">
              <h2>XbF</h2>
            </div>
            <div className="player-1-name">
              <h2>Rebellious_ Ragğer</h2>
            </div>
            <div className="player-1-score">
              <h2>1</h2>
            </div>
          </section>

          <section className="round">
            <div className="round-name"><h1>Grand Final</h1></div>
          </section>

          <section className="player-2">
            <div className="player-2-score">
              <h2>2</h2>
            </div>
            <div className="player-2-name">
              <h2>Notorius</h2>
            </div>
            <div className="player-2-sponsor">
              <h2>IKEA Mafia</h2>
            </div>
            <div className="player-2-country">
              <div class="country-flag"><img src={DemoFlagP2} alt="Sweden" /></div>
            </div>
          </section>
        </div>
      </main >
    );
  }
}

export default home;