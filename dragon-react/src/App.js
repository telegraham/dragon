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
      <React.Fragment>
      <header className="header">
        <NumberToggle number={ this.state.iterations } change={ this.toggleChanged } />
      </header>
      <Dragon iterations={ this.state.iterations } />
      </React.Fragment>
    );
  }
}

export default App;
