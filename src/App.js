import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import Movie from './Movie';

function App() {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
//Router is used in the latest version instead of Switch
//Routes the path="/" specifies the URL path to the root path. element={<MovieList />} will render the movielist when the user navigates to the root URL.
// Route