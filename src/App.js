import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NoMatch from './Component/NoMatch';
import Home from './Component/Home';
import AdminPanel from './Component/AdminPanel';
import "./Pages/AdminPanel.css";
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/admin/panel">
              <AdminPanel />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>

          </Switch>
        </Router>
      </>
    );
  }
}

export default App;