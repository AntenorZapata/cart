import React, { Component } from 'react';
import Header from '../components/Header';
import homeImg from './imgs/home.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="border-bottom"></div>
        <Header />
        <section className="section-container">
          <div className="home">
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
