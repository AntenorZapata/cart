import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import imgZatara from '../pages/imgs/zatarabg.png';
import { FaOpencart } from 'react-icons/fa';
import { fetchProducts } from '../actions/postActions';
import { times } from 'lodash';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);

    this.state = {
      fetchproducts: '',
      makeFetch: false,
      redirect: false,
    };
  }

  handleChange(e) {
    const { redirect } = this.state;
    if (e.keyCode === 13) {
      this.props.fetchProducts(e.target.value);
      this.setState({ fetchproducts: '', redirect: true });
    }
  }

  handleChangeInput(e) {
    const value = e.target.value;
    this.setState(() => ({ fetchproducts: value }));
  }

  render() {
    const { cart } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: '/products',
            state: { bool: true },
          }}
        />
      );
    }

    console.log(this.props);

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
        <div className="input-home">
          <input
            tabIndex="1"
            onKeyDown={this.handleChange}
            type="text"
            id="product"
            placeholder="Buscar Produtos"
            onChange={this.handleChangeInput}
            value={this.state.fetchproducts}
          />
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (id, query) => dispatch(fetchProducts(id, query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
