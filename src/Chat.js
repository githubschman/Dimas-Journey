import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import inputs from './possibleInput'
import responses from './messages'

class Chat extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{inputs[0].message}</h1>
          <h1 className="App-title">{responses[0].message}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
