import React, { Component } from 'react';
import {
  adjustQtySum,
  removeFromCart,
  adjustQtySubtract,
} from '../actions/postActions';
import { connect } from 'react-redux';
import BtnsQuantity from './BtnsQuantity';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    // this.handleQuantitySum = this.handleQuantitySum.bind(this);
    // this.handleQuantitySubtract = this.handleQuantitySubtract.bind(this);
  }

  // handleQuantitySum(prod) {
  //   if (prod.qty < prod.available_quantity) {
  //     this.props.adjustQtySum(prod.id, 1);
  //   }
  // }

  // handleQuantitySubtract(prod) {
  //   if (prod.qty > 1) {
  //     this.props.adjustQtySubtract(prod.id, 1);
  //   }
  // }

  render() {
    const { product, bool } = this.props;

    return (
      <div>
        <div className="prod">
          <div className="img-name">
            <div className="image">
              <img src={product.thumbnail} alt="" />
            </div>
            <div className="name">
              <h4>{product.title.split(0, 1)}</h4>
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
          {bool ? null : (
            <BtnsQuantity
              handleQuantitySum={this.handleQuantitySum}
              handleQuantitySubtract={this.handleQuantitySubtract}
              product={product}
            />
          )}
          {/* <div className="btns-qty">
            <button
              disabled={product.qty === 1 ? true : false}
              onClick={() => this.handleQuantitySubtract(product)}
            >
              -
            </button>
            <p>{product.qty}</p>
            <button onClick={() => this.handleQuantitySum(product)}>+</button>
          </div> */}
          {bool ? null : (
            <div className="subtotal">
              <p>
                {product.shipping.free_shipping
                  ? 'Grátis!'
                  : `R$: ${(9.9 * product.qty).toFixed(2)}`}
              </p>
            </div>
          )}
          {bool ? null : (
            <div className="remove">
              <p
                className="remove-btn"
                onClick={() => this.props.removeFromCart(product.id)}
              >
                remove
              </p>
            </div>
          )}
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
