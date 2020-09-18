import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import NoMatch from './Pages/NoMatch';
import './App.css';

function App() {
  return (
    <div className="App loader">
      <Router>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/settings">
            <Redirect to="/admin/settings" />
          </Route>
          <Route path="/admin/settings">
            <Settings />
          </Route>
          <Route path="/admin">
            <Redirect to="/admin/settings" />
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
