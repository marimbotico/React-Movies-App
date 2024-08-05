import React, { useEffect, useState } from "react";

function Movie() {
    const [movieList, setMovieList] = useState([]);//Using the useState hook to declare a state variable movies and a function setMovies to update it.
    //Initializing movies with an empty array.
const apiURL = "http://www.omdbapi.com/?i=tt3896198&apikey=11c4d9a4&?s=avengers"
    const getMovie = async () => {
        await fetch(apiURL)//fetches database
            .then(async (res) => {
                // console.log("api response:", res);
                return res.json()
            })//turns response to JSON
            .then( (json) => {
                console.log("api json:", json);
                setMovieList([json])
            }) // Update state with fetched data
.catch((err) => console.error("api error:",err));// error handling
    };

    useEffect(() => {
        getMovie();
    }, []);

    console.log("movieList:",movieList);

    return (
        <div>
            {movieList.map((movie) => (//iterates over the movies array using map to render a list of movie components
                <img 
                    key={movie.imdbID} // Adding key to each element
                    style={{ width: "300px", height: '250px', marginLeft: '10px', marginTop: '10px' }}//stylizing the card 
                    src={movie.Poster}
                    alt={movie.Title} // Adding alt attribute for accessibility
                />
            ))}
        </div>
    );
}

export default Movie;
