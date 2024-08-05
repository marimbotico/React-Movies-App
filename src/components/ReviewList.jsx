import React from 'react';
import Review from './Reviews';

const ReviewList = ({ reviews }) => {
    // console.log("reviewsList:", reviews);
  return (
    <div>
      {reviews.map((review, index) => (//iterates over the reviews array using map to render a list of review components and their respective index
        <Review key={index} review={review} />//review={review} passes the movie object as a prop to the `Reviews` component
      ))}
    </div>
  );
};

export default ReviewList;
