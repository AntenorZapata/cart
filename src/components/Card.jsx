import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai';
import { addToCart, loadCurrItem } from '../actions/postActions';

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  handleAddProduct(id) {
    const { addsToCart } = this.props;
    addsToCart(id);
  }

  render() {
    const { product, loadsCurrItem } = this.props;

    return (
      <div className="card">
        <div className="img-card">
          <Link to="/details" onClick={() => loadsCurrItem(product)}>
            <img
              src={product.thumbnail}
              alt="img-card"
            />
          </Link>
        </div>
        <div className="title-card-container">
          <p>
            {product.title.length > 70
              ? product.title.slice(0, 41)
              : product.title}
          </p>
        </div>
        <div className="price-card-container">
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </div>
        <div className="btns-card">
          <div className="btn">
            <AiFillPlusCircle
              className="max-btn-card"
              onClick={() => this.handleAddProduct(product.id)}
              type="button"
            />
          </div>
          {/* <div className="btn-details">
              <button
                type="button"
                onClick={() => this.props.loadCurrItem(product)}
              >
                <Link to="/details">Detalhes</Link>
              </button>
            </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
});

const mapDispatchToProps = (dispatch) => ({
  addsToCart: (id) => dispatch(addToCart(id)),
  loadsCurrItem: (item) => dispatch(loadCurrItem(item)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Card);
