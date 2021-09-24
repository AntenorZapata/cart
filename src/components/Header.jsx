import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FaOpencart } from 'react-icons/fa';
import imgZatara from '../pages/imgs/zatarabg.png';
import { fetchProducts } from '../actions/postActions';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    // this.handleFetchClick = this.handleFetchClick.bind(this);

    this.state = {
      fetchedProducts: '',
      redirect: false,
    };
  }

  handleChange(e) {
    // const { redirect } = this.state;
    // const { handleFetchItems } = this.props;

    if (e.keyCode === 13) {
      const { fetchsProducts } = this.props;
      fetchsProducts(e.target.value);
      this.setState({ redirect: true, fetchedProducts: '' });
    }
  }

  handleChangeInput({ target }) {
    const { value } = target;
    this.setState({ fetchedProducts: value });
  }

  render() {
    const { cart } = this.props;
    const { redirect } = this.state;

    const path = window.location.pathname;
    if (redirect && path !== '/products') {
      return (
        <Redirect
          to={{
            pathname: '/products',
          }}
        />
      );
    }

    const { fetchedProducts } = this.state;

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
          <Link
            onClick={this.handleFetchClick}
            className="navigation-link"
            to={{
              pathname: '/products',
            }}
          >
            Produtos
          </Link>
        </div>
        <div className="input-home">
          <input
            // tabIndex="1"
            onKeyDown={this.handleChange}
            type="text"
            id="product"
            placeholder="Buscar Produtos"
            onChange={this.handleChangeInput}
            value={fetchedProducts}
          />
        </div>
        <div className="cart-login-container">
          <div className="cart">
            <Link to="/cart" className="link-icon">
              <FaOpencart className="cart-icon" />
            </Link>
            <div className="length">{cart.length}</div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
  products: state.shop.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchsProducts: (id, query) => dispatch(fetchProducts(id, query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
