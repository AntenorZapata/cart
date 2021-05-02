import React, { Component } from 'react';
import { AiFillStar } from 'react-icons/ai';

class StarRatings extends Component {
  render() {
    const { bool, rating, handleRating } = this.props;
    const num = 5;

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

export default StarRatings;
