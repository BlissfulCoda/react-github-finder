import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import Users from './components/users/User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
