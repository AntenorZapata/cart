import React, { Component } from 'react';

const countries = [
  'Australia',
  'Brazil',
  'Paraguay',
  'Peru',
  'Argentina',
  'United States',
  'Canada',
];
export default class FormBillings extends Component {
  render() {
    return (
      <div className="checkout-left-content">
        <label htmlFor="country"> País </label>
        <select required name="" id="country">
          {countries.map((country, index) => (
            <option key={index}>{country}</option>
          ))}
        </select>
        <div className="first-last">
          <div className="first-name">
            <label htmlFor="first-name">Nome</label>
            <input required type="text" id="first-name" />
          </div>
          <div className="last-name">
            <label htmlFor="last-name">Sobrenome</label>
            <input required type="text" id="last-name" />
          </div>
        </div>
        <div className="adress">
          <div className="endreco">
            <label htmlFor="endereco">Endereço</label>
            <input required type="text" id="endereco" />
          </div>
        </div>
        <div className="number-cep">
          <label htmlFor="numero">Nº</label>
          <input required type="text" id="numero" />
          <label htmlFor="cep">Cep</label>
          <input required type="text" id="cep" />
        </div>
        <div className="city-state">
          <label htmlFor="city">Cidade</label>
          <input required type="text" id="city" />
          <label htmlFor="state">Estado</label>
          <input required type="text" id="state" />
        </div>
        <div className="email-phohe">
          <label htmlFor="email">Email</label>
          <input required type="text" id="email" />
          <label htmlFor="phone">Telefone</label>
          <input required type="text" id="phone" />
        </div>
        <div className="newsletter">
          <label htmlFor="news">Receber anúncios de promoções e serviços</label>
          <input type="checkbox" id="news" />
        </div>
      </div>
    );
  }
}
