import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, addProduct } from '../actions/postActions';

class Home extends Component {
  componentDidMount() {
    this.props.addProduct('MLB1132', '');
  }
  render() {
    console.log(this.props.product);
    return (
      <div>
        <h1>home</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product.items,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    addProduct: (id, query) => dispatch(addProduct(id, query)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
