import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import imgZatara from '../pages/imgs/zatarabg.png';
import { FaOpencart } from 'react-icons/fa';
import { fetchProducts } from '../actions/postActions';
import { times } from 'lodash';
import { useLocation } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    // this.handleFetchClick = this.handleFetchClick.bind(this);

    this.state = {
      fetchProducts: '',
      makeFetch: false,
      redirect: false,
    };
  }

  handleChange(e) {
    // const { redirect } = this.state;
    // const { handleFetchItems } = this.props;

    if (e.keyCode === 13) {
      this.props.fetchProducts(e.target.value);
      this.setState({ redirect: true, fetchProducts: '' });
      const product = localStorage.setItem('product', 'produtos da loja');
    }
  }

  handleChangeInput({ target }) {
    const { value } = target;
    this.setState({ fetchProducts: value });
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
            tabIndex="1"
            onKeyDown={this.handleChange}
            type="text"
            id="product"
            placeholder="Buscar Produtos"
            onChange={this.handleChangeInput}
            value={this.state.fetchProducts}
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (id, query) => dispatch(fetchProducts(id, query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
