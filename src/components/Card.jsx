import React, { Component } from 'react';
import { addToCart } from '../actions/postActions';
import { connect } from 'react-redux';

class Card extends Component {
  constructor(props) {
    super(props);

    this.handleAddProduct = this.handleAddProduct.bind(this);
  }

  handleAddProduct(id) {
    this.props.addToCart(id);
  }

  render() {
    const { product } = this.props;

    return (
      <div className="card">
        <h3>{product.title.split(0, 2)}</h3>
        {/* <img src={product.thumbnail} alt="" /> */}
        <div className="btn">
          <button
            onClick={() => this.handleAddProduct(product.id)}
            type="button"
          >
            +
          </button>
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
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Card);
