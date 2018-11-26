import React, { Component } from 'react';
import Home from './container/Home';
import Navbar from './ui/Navbar';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
      </div>
    );
  }
}

export default App;
