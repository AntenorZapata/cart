import React, { Component } from 'react';
import { addToCart } from '../actions/postActions';
import { connect } from 'react-redux';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.handlerGet = this.handlerGet.bind(this);
  }

  handlerGet() {
    this.props.addToCart('MLB1209174968');
  }
  render() {
    console.log(this.props.cart);
    return (
      <div>
        <button onClick={this.handlerGet}>clica</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
