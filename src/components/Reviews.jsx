import React from 'react';

const Reviews = ({ review }) => {
  return (
    <div>
      <strong>{review.name}</strong>
      <p>{review.text}</p>
    </div>
  );
};

export default Reviews;
