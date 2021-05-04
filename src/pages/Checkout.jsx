import React, { Component } from 'react';
import Header from '../components/Header';
import FormBillings from '../components/FormBillings';
import FormOrder from '../components/FormOrder';

export default class Checkout extends Component {
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    const { cart } = this.props.location.state;
    const link = cart[0].permalink;
    console.log(cart);

    return (
      <div>
        <Header />
        <div className="checkout-container">
          <form action={link} id="submit">
            <FormBillings />
            <FormOrder cart={cart} />
          </form>
          <div className="finished-order">
            <button form="submit" type="submit">
              Fazer Pedido
            </button>
          </div>
        </div>
      </div>
    );
  }
}
