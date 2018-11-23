import React, { Component } from 'react';
import './App.css';
import Home from './container/Home';
import Navbar from './ui/Navbar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Home/>
      </div>
    );
  }
}

export default App;
