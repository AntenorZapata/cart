import React, { Component } from 'react';
import { fetchCategories } from '../actions/postActions';
import { connect } from 'react-redux';

class Categories extends Component {
  render() {
    return (
      <>
        <section className='categories'>
          <ul>
            <li>Computadores</li>
            <li>Eletrodomésticos</li>
            <li>Instrumentos Musicais</li>
            <li>Vestimenta</li>
            <li>Celulares</li>
          </ul>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.shop.categories,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
