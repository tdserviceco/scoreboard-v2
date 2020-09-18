import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import Admin from './Pages/Admin';
import './App.css';

function App() {
  return (
    <div className="App loader">
      <Router>
        <Switch>
        <Route path="/">
            <Home />
          </Route>
          <Route path="/setting">
            <Settings />
          </Route>
          <Route path="/admin-panel">
            <Admin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
