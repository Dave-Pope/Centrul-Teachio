import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './containers/Navbar/Navbar';
import Homepage from './containers/Homepage/Homepage';
import Subjects from './containers/Subjects/Subjects';

import './style/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Homepage />
          <Subjects />
        </div>
      </Router>
    );
  }
}

export default App;
