import React, { useEffect, useState } from 'react';// useEffect hook (allows to perform side effects)
import Movie from './movie';

const MovieList = () => {
    const [movies, setMovies] = useState([]);// states the variable and function to update it. Initializes movies as an empty array
    let searchQuery = "avengers"
    const apiURL = `http://www.omdbapi.com/?s=${searchQuery}&apikey=11c4d9a4&`
    const getMovie = async () => {
        await fetch(apiURL)//fetches api
            .then(async (res) => {
                console.log("api response:", res);
                return res.json()//turns response to JSON
            })
            .then((json) => {
                console.log("api json:", json.Search);
                setMovies(json.Search)
            }) // Updates state with fetched data
            .catch((err) => console.error("api error:", err));// error handling
    };

    useEffect(() => {
        getMovie();
    }, []);// empty array so it renders once

    return (
        <div className='d-flex justify-content mt-15 m-5'>
            {movies.map((movie, index) => (//iterates over the movies array using map to render a list of movie components
                <Movie key={index} movie={movie} />//movie={movie} passes the movie object as a prop to the `Movie` component
            ))}
        </div>
    );
};

export default MovieList;




