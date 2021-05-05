import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import imgZatara from '../pages/imgs/zatarabg.png';
import { FaOpencart } from 'react-icons/fa';

class Header extends Component {
  render() {
    const { cart } = this.props;

    return (
      <section className="navbar">
        <div className="logo">
          <a href="/">
            <img className="zatara-logo" src={imgZatara} alt="" />
          </a>
        </div>
        <div className="links">
          <Link className="navigation-link" to="/">
            Home
          </Link>
          <Link className="navigation-link" to="/about">
            Sobre
          </Link>
          <Link className="navigation-link" to="/products">
            Produtos
          </Link>
        </div>
        <div className="cart-login-container">
          <div className="cart">
            <Link to="/cart" className="link-icon">
              <FaOpencart className="cart-icon" />
            </Link>
          </div>
          <div className="length">{cart.length}</div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
});

export default connect(mapStateToProps, null)(Header);
