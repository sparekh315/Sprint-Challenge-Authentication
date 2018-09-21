import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import SignUp from './JokesComponents/SignUp';
import SignIn from './JokesComponents/SignIn';
import Jokes from './JokesComponents/Jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/jokes' component={Jokes} />
      </div>
    );
  }
}

export default App;
