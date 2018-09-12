import React, { Component } from 'react';
import Dragon from './Dragon';
import NumberToggle from './NumberToggle';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    iterations: 15
  }

  toggleChanged = (iterations) => {
    this.setState({ 
      iterations: Math.max(Math.min(iterations, 15), 0)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NumberToggle number={ this.state.iterations } change={ this.toggleChanged } />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Dragon iterations={ this.state.iterations } />
      </div>
    );
  }
}

export default App;
