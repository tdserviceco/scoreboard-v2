import React, { Component } from 'react';
import Player from '../Components/Players';
import Scorehandler from '../Components/Scorehandler';
import Switch from '../Components/Switch';
class SettingsPanel extends Component {

  render() {
    return (
      <div className="settings-panel">
        <div className="container">
          <header>
            <nav>
              <ul>
                <li>
                  <span>Xboxfighters Admin</span>
                </li>
              </ul>
            </nav>
          </header>
            <form>
              <Player player="p1"/>
              <Player player="p2" />
          </form>
        </div>
      </div>
    );
  }
}

export default SettingsPanel;
