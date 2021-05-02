import React, { Component } from 'react';
import Header from '../components/Header';
import { addToCart, addReview, loadReview } from '../actions/postActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BtnsQuantity from '../components/BtnsQuantity';
import StarRating from '../components/StarRatings';
import FormRating from '../components/FormRating';
import { isObject } from 'lodash';

class Details extends Component {
  constructor(props) {
    super(props);
    this.handleRating = this.handleRating.bind(this);
    this.handleValue = this.handleValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      show: false,
      item: {},
      showCart: false,
      reload: true,
      rating: 0,
      email: '',
      avaliation: '',
    };
  }

  componentDidMount() {
    if (this.props.currItem) {
      this.setState({ show: true });
      this.setState({ item: this.props.currItem });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { item, email, avaliation, rating } = this.state;
    this.props.addReview(item.id, email, avaliation, rating);
  }

  handleAddToCart(id) {
    this.props.addToCart(id);
    this.setState({ showCart: true });
  }

  handleItemCart(id) {
    const item = this.props.cart.find((item) => item.id === id);
    return item;
  }

  handleRating(value) {
    this.setState({ rating: value });
  }

  handleValue(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleLoadReview(item) {}

  handleShowDivReviews(rating, id) {
    return (
      <div>
        {rating
          .filter((elem) => elem.id === id)
          .map((i, index) => (
            <StarRating key={index} />
          ))}
      </div>
    );
  }

  handleShowRating() {
    const { rating } = this.state;
    return (
      <div>
        <StarRating
          bool={true}
          handleRating={this.handleRating}
          rating={rating}
        />
        <FormRating
          handleValue={this.handleValue}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }

  render() {
    const { show, item, showCart } = this.state;
    const { rating } = this.props;

    return (
      <div>
        <Header />
        <div className="details">
          {!show ? (
            <div className="no-selected-product">
              Nenhum produto selecionado: sem localStorage :P
            </div>
          ) : (
            <div className="details-content">
              <div className="left-content">
                <img src={item.thumbnail} alt="" />
              </div>
              <div className="right-content">
                <div className="item-details-title">
                  <h3>{item.title.split(0, 2)}</h3>
                </div>
                <div className="item-details">
                  <h4>
                    Condição:
                    {item.condition === 'new' ? ' Novo' : 'usado'}
                  </h4>
                  <div className="details-price">
                    <h4>
                      {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </h4>
                  </div>
                </div>
                <div className="available-quantity">
                  <p>Estoque: {item.available_quantity}</p>
                </div>
                <div className="btn-details-add">
                  <button
                    type="button"
                    onClick={() => this.handleAddToCart(item.id)}
                  >
                    Adicionar
                  </button>
                  {this.handleShowRating()}
                  {rating.length
                    ? this.handleShowDivReviews(rating, item.id)
                    : null}
                  {showCart ? (
                    <div>
                      <div className="btns-details-cart">
                        <BtnsQuantity product={this.handleItemCart(item.id)} />
                      </div>
                      <Link to="/cart">ver carrinho</Link>
                    </div>
                  ) : null}
                </div>
              </div>
              <Link to="/products">Voltar</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currItem: state.shop.currItem,
  cart: state.shop.cart,
  rating: state.shop.rating,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadReview: (id) => dispatch(loadReview(id)),
    addReview: (id, email, msg, rating) =>
      dispatch(addReview(id, email, msg, rating)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
