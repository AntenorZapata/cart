import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <>
        <div className='navbar'>
          <Link to='/'>Home</Link>
          {'   '}
          <Link to='/about'>Sobre</Link>
          {'   '}
          <Link to='/products'>Produtos</Link>
          {'   '}
          <Link to='/cart'>CarrSymbol</Link>
          {'   '}
          <Link to='/login'>Login</Link>
        </div>
      </>
    );
  }
}
