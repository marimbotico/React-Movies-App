import React, { useState } from "react";

function AddReviews({addReview}) {//
    const [formValues, setFormValues] = useState({ name: " ", review: " " });// form object containing 2 properties

    const handleChange = (event) => {
        setFormValues({ //updates the state
            ...formValues, 
            [event.target.name]: event.target.value// creates a new object by copying the existing `formValues` using the spread operator and updates the property of the new object
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();// prevent the refreshing of the page
        addReview(formValues);//Calls the addReview function passed as a prop, passing the current formValues as an argument. This adds the new review to the parent component's state.
        setFormValues({ name: " ", review: " "});// resets the form to it's initial state
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
                name="review" // Corrected name attribute
                value={formValues.review} 
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
//react form changed values to be able to add a review submission
export default AddReviews;
