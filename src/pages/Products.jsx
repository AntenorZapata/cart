import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchProducts } from '../actions/postActions';
import Categories from '../components/Categories';
import Header from '../components/Header';

class Products extends Component {
  componentDidMount() {
    // this.props.fetchCategories();
    this.props.fetchProducts();
  }

  render() {
    console.log(this.props.products);
    return (
      <div>
        <Header />
        <Categories />
        <h1>produtos</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.shop.products,
  categories: state.shop.categories,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchProducts: (id, query) => dispatch(fetchProducts(id, query)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
