import React, { Component } from 'react';
import './App.css';

import {
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';

import Login from './views/Login';
import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
