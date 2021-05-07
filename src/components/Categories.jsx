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
          <button
            type="button"
            onClick={() => this.handleFetch('computadores')}
          >
            Computadores
          </button>
          <button
            type="button"
            onClick={() => this.handleFetch('Eletrodomésticos')}
          >
            Eletrodomésticos
          </button>
          <button
            type="button"
            onClick={() => this.handleFetch('Instrumentos Musicais')}
          >
            Instrumentos Musicais
          </button>
          <button type="button" onClick={() => this.handleFetch('Roupas')}>
            Roupas
          </button>
          <button type="button" onClick={() => this.handleFetch('Celulares')}>
            Celulares
          </button>
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
