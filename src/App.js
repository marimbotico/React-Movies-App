import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import Movie from './components/movie';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import MovieListHeading from './components/MovieListHeading';




function App() {
  return (
    <>
      <div className='container-fluid movie-app'>
        <div>
          <MovieListHeading />
          <Routes>
            <Route path="/" element={<MovieList />} />
            {/* <Route path="/movie/:imdbID" element={<Movie />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
//Router is used in the latest version instead of Switch
//Routes the path="/" specifies the URL path to the root path. element={<MovieList />} will render the movielist when the user navigates to the root URL.
// Route