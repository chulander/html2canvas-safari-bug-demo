/* eslint-disable react/prefer-stateless-function, no-console */

import React from 'react';
import html2canvas from '../html2canvas/src';
import logo from '../logo.svg';

function Example () {
  function cloneElement() {
    const targetElement = document.getElementById('source');
    html2canvas(targetElement).then(canvas => {
      console.log('what is html2canvas', html2canvas);
      console.log('targetElement', targetElement);
      document.getElementById('target').appendChild(canvas);
    });
  }
    return (
      <div>
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={cloneElement}>click</button>
        </section>
        <section id="source">
          <div className="someClass">test</div>
        </section>
        <section id="target" />
      </div>
    );
}

export default Example;
