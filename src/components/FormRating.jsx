import React, { Component } from 'react';

class FormRating extends Component {
  render() {
    const { handleSubmit, handleValue, email, avaliation } = this.props;
    return (
      <div>
        <form className="form">
          <div className="text-area-rating">
            <label htmlFor="textarea-rating">
              Sua avaliação*
              <textarea
                id="textarea-rating"
                onChange={(e) => handleValue(e)}
                name="avaliation"
                data-testid="product-detail-evaluation"
                value={avaliation}
              />
            </label>
          </div>
          <div className="input-email-rating">
            <label htmlFor="input-rating">
              Seu email*
              <input
                id="input-rating"
                type="email"
                required
                name="email"
                onChange={(e) => handleValue(e)}
                value={email}
              />
            </label>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

export default FormRating;
