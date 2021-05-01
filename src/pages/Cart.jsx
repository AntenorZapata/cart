import React, { Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { adjustQty, removeFromCart } from '../actions/postActions';
import ShoppingCart from '../components/ShoppingCart';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.handleTotal = this.handleTotal.bind(this);
  }

  handleTotal() {
    const { cart } = this.props;

    if (cart.length) {
      const total = cart.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0);

      return total.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        {!this.props.cart.length ? (
          <div className='empty-cart'>Seu carrinho está vazio</div>
        ) : (
          <div className="cart-container">
            <div className="cart-products">
              <div className="title">
                <h4>Produto</h4>
                <h4>Preço</h4>
                <h4>Quantidade</h4>
                <h4>Frete</h4>
                <h4>Excluir do Carrinho</h4>
              </div>

              {this.props.cart.map((prod) => (
                <div key={prod.id} className="cart-products-container">
                  <ShoppingCart product={prod} />
                </div>
              ))}
              <div className="total-container">
                <div className="total">
                  <h1>TOTAL DO PEDIDO</h1>
                  <p>{this.props.cart.length ? this.handleTotal() : 0}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.shop.cart,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     adjustQty: (id, value) => dispatch(adjustQty(id, value)),
//     removeFromCart: (id) => dispatch(removeFromCart(id)),
//   };
// };
export default connect(mapStateToProps, null)(Cart);
