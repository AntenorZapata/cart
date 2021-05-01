import React, { Component } from 'react';
import Header from '../components/Header';
import { addToCart } from '../actions/postActions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      item: {},
    };
  }

  componentDidMount() {
    if (this.props.currItem) {
      this.setState({ show: true });
      this.setState({ item: this.props.currItem.item });
    }
  }

  render() {
    const { show, item } = this.state;
    console.log(item);

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
                  <h4>{item.condition}</h4>
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
                    onClick={() => this.props.addToCart(item.id)}
                  >
                    Adicionar
                  </button>
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
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
