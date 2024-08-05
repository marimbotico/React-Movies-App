import React, { useEffect, useState } from "react";

function Stars({ starValue , setStarValue }) {// 2 props
    const [rating, setRating] = useState(starValue);

    useEffect(() => {
        setRating(starValue);//Whenever starValue changes, the setRating function is called to update the local rating state to match the new starValue.
    }, [starValue]);// this dependency array runs whenever the `starValue` prop changes.

    const handleClick = (value) => {// when a star is clicked
        setRating(value);// updates the local rating state
        setStarValue(value); //updates the rating in the parent's component's state
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((star) => (// iterates over an array of 5 numbers(stars)
                <span// each star is represented by a star
                    key={star}
                    onClick={() => handleClick(star)}
                    style={{ cursor: "pointer", color: star <= rating ? "gold" : "gray" }}// makes the element clickable. 
                    //the star's color is set to gold if its value is less than or equal to the current rating.
                >
                    ★
                </span>
            ))}
        </div>
    );
}

export default Stars;
