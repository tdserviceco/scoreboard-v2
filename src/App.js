import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NoMatch from './Pages/NoMatch';
import Home from './Pages/Home';
// import AdminPanel from './Pages/AdminPanel'; 
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
           {/*  <Route exact path="/admin/panel">
              <AdminPanel />
            </Route> */}
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