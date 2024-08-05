import React, { useState } from "react";
import Stars from "./Stars";

function AddReviews({ setReviews, reviews }) {// 2 props setReviews and reviews
    const [formValues, setFormValues] = useState({ name: "", review: "", rating: 0 });// form object containing 3 properties

    const handleChange = (event) => {
        setFormValues({
            ...formValues,// creates a new object by copying the existing `formValues` using the spread operator otherwise it would be overwritten with the new state
            [event.target.name]: event.target.value// updates the property "name" in the new object with the new value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();// prevent the refreshing of the page otherwise it would render the whole page
        setReviews([...reviews, formValues]);// updates the 'reviews' state by appending the new `review` to the existing array of reviews.
        setFormValues({ name: "", review: "", rating: 0 }); // resets the form and rating to the original state
    };

    const handleStarChange = (value) => {
        setFormValues((prevValues) => ({// updates the state variable formValues. callback function to compute new state based on previous state.
            ...prevValues,// copies all key-value pairs from previous values into a new object
            rating: value// appends a new rating to the form as well.
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
            />
            <label>Review</label>
            <input
                type="text"
                name="review"
                value={formValues.review}
                onChange={handleChange}
            />
            <Stars setStarValue={handleStarChange} starValue={formValues.rating}/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddReviews;
