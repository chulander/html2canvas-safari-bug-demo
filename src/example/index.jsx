/* eslint-disable react/prefer-stateless-function, no-console */

import React, { Component } from 'react';
import html2canvas from '../html2canvas/src';
import logo from '../logo.svg';

class Example extends Component {
  static cloneElement() {
    const targetElement = document.getElementById('source');
    html2canvas(targetElement).then(canvas => {
      console.log('targetElement', targetElement);
      document.getElementById('target').appendChild(canvas);
    });
  }
  render() {
    return (
      <div>
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.cloneElement}>click</button>
        </section>
        <section id="source">
          <div className="someClass">test</div>
        </section>
        <section id="target" />
      </div>
    );
  }
}

export default Example;
