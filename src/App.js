/* eslint-disable react/prefer-stateless-function, react/jsx-filename-extension */

import React, { Component } from 'react';
import './App.css';
import Example from './example';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Example />
      </div>
    );
  }
}

export default App;
