import React, { Component } from 'react';
import { AiFillStar } from 'react-icons/ai';

class StarRatings extends Component {
  render() {
    const { bool, starValue, handleRating } = this.props;
    const num = 5;

    console.log(starValue);

    return (
      <div className="star-rating">
        {[...Array(num)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label htmlFor={bool ? index : 'id'} key={index}>
              <input
                id={index}
                type="radio"
                name="starValue"
                value={ratingValue}
                onClick={() => handleRating(ratingValue)}
              />

              <AiFillStar
                color={ratingValue <= starValue ? '#000000' : '#a9a9a9'}
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
