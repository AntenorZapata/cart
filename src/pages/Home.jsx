import React, { Component } from 'react';
import Header from '../components/Header';
import homeImg from './imgs/home.jpg';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="section-container">
          <div className="home">
            <div className="home-img">
              <img src={homeImg} alt="home-img" />
              <div className="image-gradient"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
