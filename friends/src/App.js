import React, { Component } from 'react';
import FriendsList from './Components/FriendsList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className = "App">
        <h1>Say Hi To My Friends</h1>
        <FriendsList />
      </div>
    )
  }
 
  
}

export default App;
