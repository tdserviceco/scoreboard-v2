import React, { Component } from 'react';

class NoMatch extends Component {
  render() {
    return (
      <div className="errors error-404">
        <h1>Page your looking for doesnt exist anymore!</h1>
      </div>
    );
  }
}

export default NoMatch;