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
    this.handleClearFilter = this.handleClearFilter.bind(this);
    this.handleFilter = this.handleFilter.bind(this);

    this.state = {
      pageSize: 12,
      currPage: 1,
      minValue: '',
      maxValue: '',
      fetchByPrice: false,
      filterMin: false,
      shipping: false,
      filterOn: false,
    };
  }

  componentDidMount() {
    if (!this.props.location.state) {
      this.props.fetchProducts('tecnologia');
    }
  }

  handlePageChange(page) {
    this.setState({ currPage: page });
  }

  handleCurrPage() {
    this.setState({ currPage: 1 });
  }

  handleClearFilter() {
    this.setState({ minValue: '', maxValue: '' });
    this.handleCurrPage();
  }

  handleFilter({ target }) {
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value, filterOn: true });
  }

  render() {
    const { length: count } = this.props.products;
    const {
      pageSize,
      currPage,
      minValue,
      maxValue,
      shipping,
      filterOn,
    } = this.state;

    console.log(this.props);

    // Loading products
    if (count === 0)
      return (
        <div className="container-spinner">
          <div className="loading"></div>
        </div>
      );

    // Paginate
    let products = paginate(this.props.products, currPage, pageSize);
    let filterPage = this.props.products;

    // Filter by shipping

    if (shipping) {
      filterPage = this.props.products.filter(
        (i) => i.shipping.free_shipping === true
      );
      products = paginate(filterPage, currPage, pageSize);
    }

    // Filter by Price

    if (minValue || maxValue) {
      if (minValue !== '' && maxValue === '') {
        filterPage = this.props.products.filter((i) => i.price > minValue);
      } else {
        filterPage = this.props.products.filter(
          (i) => i.price >= minValue && i.price <= maxValue
        );
      }
      products = paginate(filterPage, currPage, pageSize);
    }

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
                  itemsCount={
                    filterOn
                      ? filterPage.length
                      : this.props.products.length - 2
                  }
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
              <div className="filter-price">
                <input
                  type="text"
                  onChange={this.handleFilter}
                  className="min"
                  name="minValue"
                  value={minValue}
                  placeholder="min"
                />
                <p className="separator">-</p>
                <input
                  type="text"
                  onChange={this.handleFilter}
                  className="max"
                  name="maxValue"
                  placeholder="max"
                  value={maxValue}
                />
              </div>
              <div className="btn-filter-price">
                <button onClick={this.handleClearFilter} type="button">
                  Limpar Filtro
                </button>
              </div>
              <div className="checkbox-shipping">
                <input
                  name="shipping"
                  type="checkbox"
                  onChange={this.handleFilter}
                  value={shipping}
                />
                <label className="label-check-shipping">Frete Grátis</label>
              </div>
            </aside>
          </section>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.shop.products,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: (query) => dispatch(fetchProducts(query)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
