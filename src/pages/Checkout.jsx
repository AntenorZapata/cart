import React, { Component } from 'react';
import Header from '../components/Header';
import FormBillings from '../components/FormBillings';
import FormOrder from '../components/FormOrder';

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="checkout-container">
          <div className="checkout-left-content">
            <FormBillings />
          </div>
          <div className="checkout-right-content">
            <FormOrder />
          </div>
        </div>
      </div>
    );
  }
}
