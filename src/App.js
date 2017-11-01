import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';
import logo from './logo.svg';
import Chat from './Chat'
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Switch>
        <MuiThemeProvider>
          <Route exact path="/" component={Chat} />
        </MuiThemeProvider>
        </Switch>
      </div>
    );
  }
}

export default App;
