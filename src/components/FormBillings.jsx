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
    const { state } = this.props;
    return (
      <div className="checkout-left-content">
        {/* <label htmlFor="country"> País </label> */}
        <select required name="" id="country" className="select-country">
          {countries.map((country, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <option key={index}>
              {state.country ? state.country : country}
            </option>
          ))}
        </select>
        <div className="first-last">
          <div className="first-name">
            {/* <label htmlFor="first-name">Nome</label> */}
            <input
              required
              type="text"
              id="first-name"
              defaultValue={state.name}
              placeholder="Nome"
            />
          </div>
          <div className="last-name">
            {/* <label htmlFor="last-name">Sobrenome</label> */}
            <input
              required
              type="text"
              id="last-name"
              defaultValue={state.lastName}
              placeholder="Sobrenome"

            />
          </div>
        </div>
        <div className="adress">
          <div className="endreco">
            {/* <label htmlFor="endereco">Endereço</label> */}
            <input
              required
              type="text"
              id="endereco"
              defaultValue={state.adress}
              placeholder="Endereço"

            />
          </div>
        </div>
        <div className="number-cep">
          {/* <label htmlFor="numero">Nº</label> */}
          <input
            required
            type="text"
            id="numero"
            defaultValue={state.num}
            placeholder="Número"
          />
          {/* <label htmlFor="cep">Cep</label> */}
          <input
            required
            type="text"
            id="cep"
            defaultValue={state.cep}
            placeholder="Cep"
          />
        </div>
        <div className="city-state">
          {/* <label htmlFor="city">Cidade</label> */}
          <input
            required
            type="text"
            id="city"
            defaultValue={state.city}
            placeholder="Cidade"
          />
          {/* <label htmlFor="state">Estado</label> */}
          <input
            required
            type="text"
            id="state"
            defaultValue={state.state}
            placeholder="Estado"
          />
        </div>
        <div className="email-phohe">
          {/* <label htmlFor="email">Email</label> */}
          <input
            required
            type="text"
            id="email"
            placeholder="Email"
            defaultValue={state.email}
          />
          {/* <label htmlFor="phone">Telefone</label> */}
          <input
            required
            type="text"
            id="phone"
            placeholder="Telefone"
            defaultValue={state.phone}
          />
        </div>
        <div className="newsletter">
          <span>Receber anúncios de promoções e serviços</span>
          <input type="checkbox" id="news" />
        </div>
      </div>
    );
  }
}
