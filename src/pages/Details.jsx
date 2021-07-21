import React, { Component } from 'react';
import Header from '../components/Header';
import { addToCart, addReview, loadReview } from '../actions/postActions';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import BtnsQuantity from '../components/BtnsQuantity';
import StarRating from '../components/StarRatings';
import FormRating from '../components/FormRating';
// import { isObject } from 'lodash';
import { FaOpencart } from 'react-icons/fa';

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
      starValue: 0,
      email: '',
      avaliation: '',
    };
  }

  componentWillMount() {
    if (this.props.currItem) {
      this.setState({ show: true });
      this.setState({ item: this.props.currItem });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { item, email, avaliation, starValue } = this.state;
    if (email && avaliation) {
      this.props.addReview(item.id, email, avaliation, starValue);
      this.setState({ starValue: 0, email: '', avaliation: '' });
    } else {
      window.alert('Preencha todos os campos.');
    }
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
    console.log(value);
    this.setState({ starValue: value });
  }

  handleValue(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleShowDivReviews(rating, id) {
    return (
      <div className="show-review-details">
        {rating
          .filter((elem) => elem.id === id)
          .map((i, index) => (
            <div key={index}>
              <StarRating className="show-rating" starValue={i.rating} />
              <p>{i.email}</p>
              <p>{i.msg}</p>
            </div>
          ))}
      </div>
    );
  }

  handleShowRating() {
    const { starValue, email, avaliation } = this.state;
    return (
      <div>
        <StarRating
          bool={true}
          handleRating={this.handleRating}
          starValue={starValue}
        />
        <FormRating
          handleValue={this.handleValue}
          handleSubmit={this.handleSubmit}
          avaliation={avaliation}
          email={email}
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
        <div className="details-container">
          <div className="details">
            {!show ? (
              <div className="no-selected-product">
                Nenhum produto selecionado.
                <Redirect to="/products" />
              </div>
            ) : (
              <div className="details-content">
                <div className="left-content">
                  <div className="popup-left-content">
                    <ul>
                      <li>
                        <div className="content-popup">
                          <p>
                            Aglumas imagens estão em baixa resolução por conta
                            do tamanho dos arquivos fornecidos pela API.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <img src={item.thumbnail} alt="" />
                </div>
                <div className="right-content">
                  <div className="item-details-title">
                    <h1>{item.title.split(0, 1)}</h1>
                  </div>
                  <div className="item-details">
                    <h4 className="condition">
                      Condição:
                      {item.condition === 'new' ? ' Novo' : 'usado'}
                    </h4>
                    <div className="details-description">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iste voluptatem quos delectus amet voluptatibus est rem
                        praesentium vel ea sunt suscipit recusandae nulla
                      </p>
                    </div>
                    <div className="details-price">
                      <h3>
                        {item.price.toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })}
                      </h3>
                    </div>
                  </div>
                  <div className="available-quantity">
                    Estoque:
                    <span
                      style={{
                        color: item.available_quantity > 10 ? 'green' : 'red',
                      }}
                    >
                      {item.available_quantity}
                    </span>
                  </div>
                  <div className="btn-details-add">
                    <button
                      className="btn-add"
                      type="button"
                      onClick={() => this.handleAddToCart(item.id)}
                    >
                      Adicionar
                    </button>
                    {showCart ? (
                      <div>
                        <div className="btns-quantity-details">
                          <BtnsQuantity
                            product={this.handleItemCart(item.id)}
                          />
                        </div>
                        <div className="see-cart">
                          <Link to="/cart">
                            <FaOpencart
                              className="cart-details-icon"
                              to="/cart"
                            />
                          </Link>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="back-to-products">
                    <Link className="back-link" to="/products">
                      Voltar
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="show-review">
            {this.handleShowRating()}
            {rating.length ? this.handleShowDivReviews(rating, item.id) : null}
          </div>
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
    addReview: (id, email, msg, starValue) =>
      dispatch(addReview(id, email, msg, starValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
