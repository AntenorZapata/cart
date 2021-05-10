import React, { Component } from 'react';
import { connect } from 'react-redux';
import { adjustQtySum, adjustQtySubtract } from '../actions/postActions';
import { GrSubtractCircle } from 'react-icons/gr';
import { AiFillPlusCircle } from 'react-icons/ai';

class BtnsQuantity extends Component {
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
    console.log(`product: ${product.id}`);
    return (
      <div>
        <div className="btns-qty">
          <div className="min-container">
            <GrSubtractCircle
              className="min-btn-details"
              onClick={() => this.handleQuantitySubtract(product)}
            ></GrSubtractCircle>
          </div>
          <div className="amount-cart">{product.qty}</div>
          <div className="max-container">
            <AiFillPlusCircle
              className="max-btn-details"
              onClick={() => this.handleQuantitySum(product)}
            ></AiFillPlusCircle>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BtnsQuantity);
