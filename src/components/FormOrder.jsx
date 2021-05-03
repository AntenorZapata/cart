import React, { Component } from 'react';

export default class FormOrder extends Component {
  render() {
    return (
      <div className="order">
        <form action="">
          <label htmlFor="card">Salvar os dados do cartão</label>
          <input type="checkbox" id="card" />
        </form>
        <div className="">
          <div className="finished-order">
            <button type="button">Fazer peddido</button>
          </div>
        </div>
      </div>
    );
  }
}
