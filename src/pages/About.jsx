import React, { Component } from 'react';
import Header from '../components/Header';

export default class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="about-container">
          <h1>Player audio</h1>
        </div>
      </div>
    );
  }
}
