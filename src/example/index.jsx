import React, { Component } from 'react';
import html2canvas from '../html2canvas';
import logo from '../logo.svg';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.clone = this.clone.bind(this);
  }
  clone() {
    const targetElement = document.getElementById('source');
    html2canvas(targetElement).then(canvas=>{
        console.log('targetElement', targetElement);
        document.getElementById('target').appendChild(canvas)
    })
  }
  render() {
    return (
      <div>
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.clone}>click</button>
        </section>
        <section id="source" >
            <div className="someClass">
                test
            </div>
        </section>
        <section id="target" />
      </div>
    );
  }
}
