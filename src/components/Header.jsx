import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <section className='navbar'>
        <div className='logo'>
          <Link to='/'>LOgo</Link>
        </div>
        <div className=''>
          <Link to='/'>Home</Link>
          <Link to='/about'>Sobre</Link>
          <Link to='/products'>Produtos</Link>
        </div>
        <div className='cart'>
          <Link to='/login'>Login</Link>
        </div>
      </section>
    );
  }
}
