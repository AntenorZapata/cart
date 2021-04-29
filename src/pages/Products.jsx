import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchProducts } from '../actions/postActions';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Card from '../components/Card';

class Products extends Component {
  componentDidMount() {
    // this.props.fetchCategories();
    this.props.fetchProducts('', 'informática');
  }

  render() {
    console.log(this.props.products);
    return (
      <div>
        <Header />
        <section className='content'>
          <section className='product-container'>
            <div className='section-products'>
              <div className='card-container'>
                {this.props.products.map((item) => {
                  return <Card key={item.id} product={item} />;
                })}
              </div>
            </div>
            <aside className='categories-aside'>
              <Categories />
            </aside>
          </section>
        </section>
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
