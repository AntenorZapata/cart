import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GrSubtractCircle } from 'react-icons/gr';
import { AiFillPlusCircle } from 'react-icons/ai';
import { adjustQtySum, adjustQtySubtract } from '../actions/postActions';

class BtnsQuantity extends Component {
  handleQuantitySum(prod) {
    if (prod.qty < prod.available_quantity) {
      const { adjustQtySums } = this.props;
      adjustQtySums(prod.id, 1);
    }
  }

  handleQuantitySubtract(prod) {
    const { adjustQtySubtracts } = this.props;

    if (prod.qty > 1) {
      adjustQtySubtracts(prod.id, 1);
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
            />
          </div>
          <div className="amount-cart">{product.qty}</div>
          <div className="max-container">
            <AiFillPlusCircle
              className="max-btn-details"
              onClick={() => this.handleQuantitySum(product)}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
});

const mapDispatchToProps = (dispatch) => ({
  adjustQtySums: (id, value) => dispatch(adjustQtySum(id, value)),
  adjustQtySubtracts: (id, value) => dispatch(adjustQtySubtract(id, value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BtnsQuantity);
