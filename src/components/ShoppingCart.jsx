import React, { Component } from 'react';
import {
  adjustQtySum,
  removeFromCart,
  adjustQtySubtract,
} from '../actions/postActions';
import { connect } from 'react-redux';

class ShoppingCart extends Component {
  handleQuantitySum(prod) {
    if (prod.qty < prod.available_quantity) {
      this.props.adjustQtySum(prod.id, 1);
    }
  }

  handleQuantitySubtract(prod) {
    if (prod.qty > 1) {
      this.props.adjustQtySubtract(prod.id, 1);
    }
  }

  render() {
    const { product } = this.props;
    console.log(product);

    return (
      <div>
        <div className="prod">
          <div className="img-name">
            <div className="image">
              <img src={product.thumbnail} alt="" />
            </div>
            <div className="name">
              <h4>{product.title.split(0, 2)}</h4>
            </div>
          </div>
          <div className="price">
            <p>
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
          <div className="btns-qty">
            <button
              disabled={product.qty === 1 ? true : false}
              onClick={() => this.handleQuantitySubtract(product)}
            >
              -
            </button>
            <p>{product.qty}</p>
            <button onClick={() => this.handleQuantitySum(product)}>+</button>
          </div>
          <div className="subtotal">
            <p>
              {product.shipping.free_shipping
                ? 'Grátis!'
                : `R$: ${(9.9 * product.qty).toFixed(2)}`}
            </p>
          </div>
          <div className="remove">
            <p
              className="remove-btn"
              onClick={() => this.props.removeFromCart(product.id)}
            >
              remove
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
});

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQtySum: (id, value) => dispatch(adjustQtySum(id, value)),
    adjustQtySubtract: (id, value) => dispatch(adjustQtySubtract(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

// shipping:
// free_shipping: true
