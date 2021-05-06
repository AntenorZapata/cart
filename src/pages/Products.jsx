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
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleFilterPrice = this.handleFilterPrice.bind(this);

    this.state = {
      pageSize: 12,
      currPage: 1,
      minValue: '',
      maxValue: '',
      fetchByPrice: false,
      filterMin: false,
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

  handleFilterPrice(e) {
    const { name, value } = e.target;
    const { minValue, maxValue } = this.state;

    if (name === 'minValue' && value !== '') {
      this.setState({ filterMin: true });
    } else if (name === 'maxValue' && value !== '') {
      this.setState({ filterMin: false });
    }

    if (value === '') {
      this.setState({ minValue: '', maxValue: '', fetchByPrice: false });
    } else {
      parseFloat(e.target.value, 10);
      this.setState({ [name]: e.target.value, fetchByPrice: true });
    }
  }

  handleFilterClick() {
    this.setState({ fetchByPrice: false, minValue: '', maxValue: '' });
    this.handleCurrPage();
  }

  render() {
    const { length: count } = this.props.products;
    const {
      pageSize,
      currPage,
      minValue,
      maxValue,
      fetchByPrice,
      filterMin,
    } = this.state;

    console.log(filterMin);

    //loading products
    if (count === 0)
      return (
        <div className="container-spinner">
          <div className="loading"></div>
        </div>
      );

    //paginate
    let products = paginate(this.props.products, currPage, pageSize);
    let filterPage = this.props.products.filter(
      (i) => i.price >= minValue && i.price <= maxValue
    );

    if (filterMin) {
      filterPage = this.props.products.filter((i) => i.price > minValue);
    }

    //filter per price
    if (fetchByPrice) {
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
                    fetchByPrice
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
                  onChange={this.handleFilterPrice}
                  className="min"
                  name="minValue"
                  value={minValue}
                  placeholder="min"
                />
                <p className="separator">-</p>
                <input
                  type="text"
                  onChange={(e) => this.handleFilterPrice(e)}
                  className="max"
                  name="maxValue"
                  placeholder="max"
                  value={maxValue}
                />
              </div>
              <div className="btn-filter-price">
                <button onClick={this.handleFilterClick} type="button">
                  Limpar Filtro
                </button>
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
  categories: state.shop.categories,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchProducts: (query) => dispatch(fetchProducts(query)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
