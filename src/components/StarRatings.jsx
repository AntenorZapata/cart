import React, { Component } from 'react';
import { AiFillStar } from 'react-icons/ai';
import PropTypes from 'prop-types';

class StarRatings extends Component {
  render() {
    const { handleRating, rating, bool } = this.props;
    const num = 5;
    console.log(bool);
    return (
      <div className="star-rating">
        {[...Array(num)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label htmlFor={bool ? index : 'id'} key={index}>
              <input
                id={index}
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleRating(ratingValue)}
              />

              <AiFillStar
                color={ratingValue <= rating ? '#000000' : '#a9a9a9'}
                className="star"
              />
            </label>
          );
        })}
      </div>
    );
  }
}

StarRatings.propTypes = {
  handleRating: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  bool: PropTypes.string.isRequired,
};

export default StarRatings;
