import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import SignUp from './JokesComponents/SignUp';
import SignIn from './JokesComponents/SignIn';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/signin' component={SignIn} />
      </div>
    );
  }
}

export default App;
