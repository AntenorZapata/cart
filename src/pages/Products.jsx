import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchProducts } from '../actions/postActions';
import Categories from '../components/Categories';
import Header from '../components/Header';
import Card from '../components/Card';
import Pagination from '../components/Pagination';
import { paginate } from '../utils/paginate';

class Products extends Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleCurrPage = this.handleCurrPage.bind(this);

    this.state = {
      pageSize: 12,
      currPage: 1,
    };
  }

  componentDidMount() {
    if (!this.props.location.state) {
      this.props.fetchProducts('tecnologia');
    }

    console.log(this.props.location.state);
  }

  handlePageChange(page) {
    this.setState({ currPage: page });
  }

  handleCurrPage() {
    this.setState({ currPage: 1 });
  }

  render() {
    const { length: count } = this.props.products;
    const { pageSize, currPage } = this.state;
    if (count === 0)
      return (
        <div className="container-spinner">
          <div className="loading"></div>
        </div>
      );

    const products = paginate(this.props.products, currPage, pageSize);

    return (
      <div>
        <Header />

        <section className="content">
          <section className="product-container">
            <div className="section-products">
              <div className="card-container">
                {products.map((item) => {
                  return <Card key={item.id} product={item} />;
                })}
              </div>
              <div className="pagination">
                <Pagination
                  itemsCount={this.props.products.length - 2}
                  pageSize={pageSize}
                  onPageChange={this.handlePageChange}
                  currPage={currPage}
                />
              </div>
            </div>
            <aside className="categories-aside">
              <div className="categories-title">
                <h3>Categorias</h3>
                <div className="line-bottom-categories"></div>
              </div>

              <Categories handleCurrPage={this.handleCurrPage} />
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
    fetchProducts: (query) => dispatch(fetchProducts(query)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
