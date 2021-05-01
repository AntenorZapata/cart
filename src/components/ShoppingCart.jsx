import React, { Component } from 'react';

export default class ShoppingCart extends Component {
  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <div>
        <div className="prod">
          <div className="img-name">
            <div className="image">
              <img src={product.thumbnail} alt="" />
            </div>
            <div className="name">
              <h4>{product.title.split(0, 2)}</h4>
            </div>
          </div>
          <div className="price">
            <p>{product.price}</p>
          </div>
          <div className="btns-qty">
            <button>-</button>
            <p>{product.qty}</p>
            <button>+</button>
          </div>
          <div className="subtotal">
            <p>
              {product.shipping.free_shipping
                ? 'Grátis!'
                : `R$: ${Math.round(Math.random() * 20)},90`}
            </p>
          </div>
          <div className="remove">
            <p>remove</p>
          </div>
        </div>
      </div>
    );
  }
}

// shipping:
// free_shipping: true
