import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './Pages/Home';
import SettingsLogin from './Pages/SettingsLogin';
import NoMatch from './Pages/NoMatch';
import SettingsPanel from './Pages/SettingsPanel';
import './App.css';

function App() {
  return (
    <div className="App loader">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/admin/settings/panel">
            <SettingsPanel />
          </Route>
          
          <Route path="/settings">
            <Redirect to="/admin/settings/login" />
          </Route>

          <Route path="/admin/settings/login">
            <SettingsLogin />
          </Route>

          <Route path="/admin">
            <Redirect to="/admin/settings/login" />
          </Route>
          
          <Route path="*">
            <NoMatch />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
