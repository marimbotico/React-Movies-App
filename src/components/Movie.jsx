import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import Stars from './Stars';

const Movie = ({ movie }) => {//deconstructing, the component takes `movie` as a prop.
  const [reviews, setReviews] = useState([]);// declares reviews and setReviews updates it.

  const addReview = (review) => {// function that takes review as a parameter
    setReviews([...reviews, review]);// updates the 'reviews' state by appending the new `review` to the existing array of reviews.
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={`${movie.title} poster`} width="240" height="360" className="mb-3" />
      <p>{movie.synopsis}</p>
      <h2>Rating</h2>
      <Stars />
      <h2>Reviews</h2>
      <ReviewList reviews={reviews} />
      <ReviewForm addReview={addReview} />
    </div>
  );
};

export default Movie;
