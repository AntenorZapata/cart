import React, { Component } from 'react';
import Header from '../components/Header';
import FormBillings from '../components/FormBillings';
import FormOrder from '../components/FormOrder';
import ShoppingCart from '../components/ShoppingCart';

export default class Checkout extends Component {
  constructor(props) {
    super(props);
    this.handleFillForm = this.handleFillForm.bind(this);

    this.state = {
      cart: [],
      total: '',
      country: '',
      name: '',
      lastName: '',
      adress: '',
      cep: '',
      num: '',
      city: '',
      state: '',
      email: '',
      phone: '',
      credCard: '',
      date: '',
      cc: '',
    };
  }

  componentDidMount() {
    const { cart, total } = this.state;
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  handleFillForm() {
    this.setState({
      country: 'France',
      name: 'Edmond ',
      lastName: 'Dantès',
      adress: 'La Canebiere',
      cep: '44900000',
      num: '353',
      city: 'Marseilles',
      state: 'Bouches-du-Rhône',
      email: 'countofmontecristo@gmail.com',
      phone: '33 - 4454-45343',
      credCard: '4044 9810 3432 2043',
      date: '1844-10-19',
      cc: '511',
    });
  }

  render() {
    const { cart, total } = this.props.location.state;
    const link = cart[0].permalink;
    console.log(total);

    return (
      <div>
        <Header />
        <div className="checkout-container">
          {cart.map((prod) => (
            <div key={prod.id} className="cart-products-container">
              <ShoppingCart product={prod} bool={true} />
            </div>
          ))}
          <form action={link} id="submit">
            <FormBillings state={this.state} />
            <FormOrder state={this.state} cart={cart} />
          </form>
          <div className="fill-order">
            <button onClick={this.handleFillForm} type="button">
              Preenchimento automatico
            </button>
          </div>
          <div className="finished-order">
            <button form="submit" type="submit">
              Fazer Pedido
            </button>
          </div>
          <p>{total}</p>
        </div>
      </div>
    );
  }
}
