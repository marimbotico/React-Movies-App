import React, { useState } from "react";

function AddReviews({addReview}) {
    const [formValues, setFormValues] = useState({ name: " ", review: " " });

    const handleChange = (event) => {
        setFormValues({ 
            ...formValues, 
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addReview(formValues);
        setFormValues({ name: " ", review: " "});
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
