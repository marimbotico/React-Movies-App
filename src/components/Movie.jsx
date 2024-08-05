import React, { useState } from 'react';
import AddReviews from './AddReview';
import ReviewList from './ReviewList';


const Movie = ({ movie }) => {//deconstructing, the component takes `movie` as a prop.
  const [reviews, setReviews] = useState([]);// declares reviews and setReviews updates it.



  return (
    <div className='container-fluid'>
      <div className='row d-flex align-items center mt-10 mb-10'>
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={`${movie.Title} poster`} width="600" height="360" className="mb-4" />
        <p>{movie.Plot}</p>
        <h2>Review List</h2>
        <ReviewList reviews={reviews} />
        <AddReviews setReviews={setReviews} reviews={reviews} />
      </div>
    </div>
  );
};

export default Movie;
