import React from 'react';


function Reviews({ review }) {
  const renderStars = (rating) => {// converts the rating number into stars using this function
      return Array.from({ length: 5 }, (_, index) => (// creates an array of 5
          <span key={index} style={{ color: index < rating ? "gold" : "gray" }}>
              ★
          </span>
      ));//the mapping function returns a span element for each index. the style prop sets the color of the star.
  };
//The renderStars function returns an array of 5 stars with the number of gold stars corresponding to the rating value.
  return (
      <div>
          <h4>{review.name}</h4>
          <p>{review.review}</p>
          <div>{renderStars(review.rating)}</div>
      </div>
  );
}

export default Reviews;
