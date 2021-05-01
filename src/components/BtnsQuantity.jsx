import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adjustQtySum, adjustQtySubtract } from '../actions/postActions';

class BtnsQuantity extends Component {
  handleQuantitySum(prod) {
    console.log(prod);
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
    return (
      <div>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BtnsQuantity);
