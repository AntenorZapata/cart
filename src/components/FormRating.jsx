import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormRating extends Component {
  render() {
    const { Submit, Value } = this.props;
    return (
      <div>
        <form className="form">
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            onChange={(e) => Value(e)}
          />
          <textarea
            onChange={(e) => Value(e)}
            name="avaliation"
            data-testid="product-detail-evaluation"
            placeholder="Sua opinião sobre o produto"
          />
          <button type="submit" onClick={Submit}>
            Avaliar
          </button>
        </form>
      </div>
    );
  }
}

FormRating.propTypes = {
  Submit: PropTypes.func.isRequired,
  Value: PropTypes.func.isRequired,
};

export default FormRating;
