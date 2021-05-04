import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { cart } = this.props;

    return (
      <section className="navbar">
        <div className="logo">
          <Link to="/">LOgo</Link>
        </div>
        <div className="">
          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/products">Produtos</Link>
        </div>
        <div className="cart-login-container">
          <div className="cart">
            <Link to="/cart">Cart</Link>
          </div>
          <p>{cart.length}</p>
          {/* <div className="login">
            <Link to="/login">Login</Link>
          </div> */}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
});

export default connect(mapStateToProps, null)(Header);
