import React, { useState } from 'react';

const Stars = () => {
  const [rating, setRating] = useState(0);// initializes the stars at 0.

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (//using an array of numbers to create the 5 stars/ //span element represents 1 star.
        <span
          key={star}
          onClick={() => setRating(star)}// event handler sets rating to current star. 
          style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'grey' }}// changes the cursor to a pointer when hovering.
          //If the current star value is less than or equal to the rating, the color is set to 'gold' (indicating a selected star).
        //If the current star value is greater than the rating, the color is set to 'grey' (indicating an unselected star).
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;
