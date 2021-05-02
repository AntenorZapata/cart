import React, { Component } from 'react';

class FormRating extends Component {
  render() {
    const { handleSubmit, handleValue } = this.props;
    return (
      <div>
        <form className="form">
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            onChange={(e) => handleValue(e)}
          />
          <textarea
            onChange={(e) => handleValue(e)}
            name="avaliation"
            data-testid="product-detail-evaluation"
            placeholder="Sua opinião sobre o produto"
          />
          <button type="submit" onClick={handleSubmit}>
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

export default FormRating;
