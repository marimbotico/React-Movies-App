import React, { useEffect, useState } from "react";

function Movie() {
    const [movieList, setMovieList] = useState([]);//Using the useState hook to declare a state variable movies and a function setMovies to update it.
    //Initializing movies with an empty array.

    const getMovie = () => {
        fetch("http://www.omdbapi.com/?apikey=[11c4d9a4]&")//fetches database
            .then((res) => res.json())//turns response to JSON
            .then((json) => setMovieList(json.results)) // Update state with fetched data
            .catch((err) => console.error(err));// error handling
    };

    useEffect(() => {
        getMovie();
    }, []);

    console.log(movieList);

    return (
        <div>
            {movieList.map((movie) => (//iterates over the movies array using map to render a list of movie components
                <img 
                    key={movie.id} // Adding key to each element
                    style={{ width: "300px", height: '250px', marginLeft: '10px', marginTop: '10px' }}//stylizing the card 
                    src={`http://img.omdbapi.com/?apikey=[11c4d9a4]&${movie.poster_path}`} 
                    alt={movie.title} // Adding alt attribute for accessibility
                />
            ))}
        </div>
    );
}

export default Movie;
