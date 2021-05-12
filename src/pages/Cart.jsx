import React, { Component } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { adjustQty, removeFromCart } from '../actions/postActions';
import ShoppingCart from '../components/ShoppingCart';
import { Link } from 'react-router-dom';
import { MdRemoveShoppingCart } from 'react-icons/md';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.handleTotal = this.handleTotal.bind(this);
    this.handleShipping = this.handleShipping.bind(this);
  }

  handleTotal() {
    const { cart } = this.props;

    if (cart.length) {
      const total = cart.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0);

      return total;
    }
  }

  handleShipping() {
    const { cart } = this.props;

    const shippingCart = cart.filter((i) => i.shipping.free_shipping === false);

    const shipping = shippingCart.reduce((total, item) => {
      total += item.qty * 9.9;
      return total;
    }, 0);
    return shipping;
  }

  render() {
    const { cart } = this.props;
    const total = (this.handleTotal() + this.handleShipping()).toLocaleString(
      'pt-BR',
      {
        style: 'currency',
        currency: 'BRL',
      }
    );
    return (
      <div>
        <Header />
        {!this.props.cart.length ? (
          <div className="empty-cart">
            <div className="back-to-products">
              <Link className="back-link back-link-cart" to="/products">
                Voltar
              </Link>
            </div>
            <p>Não há produtos no carrinho.</p>
            <MdRemoveShoppingCart className="empty-cart-icon" />
          </div>
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
              <div className="line-bottom"></div>

              {this.props.cart.map((prod) => (
                <div key={prod.id} className="cart-products-container">
                  <ShoppingCart product={prod} />
                </div>
              ))}
              <div className="back-to-products">
                <Link to="/products" className="back-link back-cart">
                  Continuar Comprando
                </Link>
              </div>

              <div className="total-container">
                <div className="total">
                  <h4>Subtotal</h4>
                  <p>
                    {this.props.cart.length
                      ? this.handleTotal().toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                        })
                      : null}
                  </p>
                  <div className="shipping-price">
                    <h4>Frete</h4>
                    <p>
                      +
                      {this.handleShipping().toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })}
                    </p>
                  </div>
                  <h4>Total do pedido</h4>
                  {total}
                </div>
              </div>
              <div className="proceed-checkout">
                <Link
                  className="btn-add-checkout"
                  to={{
                    pathname: '/checkout',
                    state: { cart, total },
                  }}
                >
                  Finalizar Compra
                </Link>
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
