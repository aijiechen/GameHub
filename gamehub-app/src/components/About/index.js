import React, { Component } from 'react';

import './style.css';

export default class About extends Component {
  render() {
    return (
      <div className="About">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="About-intro">
          About us
        </p>
      </div>
    );
  }
}

