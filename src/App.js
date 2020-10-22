import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import UserItem from './components/users/UserItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <UserItem />
        <h1> Hi</h1>
      </div>
    );
  }
}

export default App;
