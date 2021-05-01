import React, { Component } from 'react';
import Header from '../components/Header';

class Home extends Component {
  render() {
    return (
      <section>
        <Header />
        <div className="home">
          <div className="home-content">
            <h1>home</h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
