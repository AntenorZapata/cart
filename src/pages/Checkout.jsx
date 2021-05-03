import React, { Component } from 'react';
import Header from '../components/Header';

const countries = [
  'Australia',
  'Brazil',
  'Paraguay',
  'Peru',
  'Argentina',
  'United States',
  'Canada',
];

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="checkout-container">
          <div className="billings">
            <form action="">
              <label htmlFor="country"> País </label>
              <select name="" id="country">
                {countries.map((country) => (
                  <option>{country}</option>
                ))}
              </select>
              <div className="first-last">
                <div className="first-name">
                  <label htmlFor="first-name">Nome</label>
                  <input type="text" id="first-name" />
                </div>
                <div className="last-name">
                  <label htmlFor="last-name">Sobrenome</label>
                  <input type="text" id="last-name" />
                </div>
              </div>
            </form>
          </div>
          <div className="order">
            <div className="finished-order">
              <button type="button">Fazer peddido</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
