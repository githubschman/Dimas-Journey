import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {
    let messages = process.env.REACT_APP_MESSAGES.split(' , ')
    let inputs = process.env.REACT_APP_POSSIBLE_INPUTS.split('^%^')
    console.log(inputs)
    let jsonified = JSON.parse(inputs[111]) 
    console.log(jsonified)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
          <h1 className="App-title">Well... {}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
