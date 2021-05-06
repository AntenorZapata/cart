import React, { Component } from 'react';
import { fetchProducts } from '../actions/postActions';
import { connect } from 'react-redux';

class Categories extends Component {
  constructor(props) {
    super(props);
    this.handleFetch = this.handleFetch.bind(this);
  }

  handleFetch(query) {
    const { handleCurrPage } = this.props;
    this.props.fetchProducts(query);
    handleCurrPage();
  }

  render() {
    return (
      <>
        <section className="categories">
          <ul>
            <li onClick={() => this.handleFetch('computadores')}>
              Computadores
            </li>
            <li onClick={() => this.handleFetch('Eletrodomésticos')}>
              Eletrodomésticos
            </li>
            <li onClick={() => this.handleFetch('Instrumentos Musicais')}>
              Instrumentos Musicais
            </li>
            <li onClick={() => this.handleFetch('Roupas')}>Roupas</li>
            <li onClick={() => this.handleFetch('Celulares')}>Celulares</li>
          </ul>
        </section>
      </>
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
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
