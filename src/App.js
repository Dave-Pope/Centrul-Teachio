import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './containers/Navbar/Navbar';
import Homepage from './containers/Homepage/Homepage';

import './style/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Homepage />
        </div>
      </Router>
    );
  }
}

export default App;
