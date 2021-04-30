import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
// import Request from "../helpers/request";

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setLoading(true);

    fetch(
      `http://www.omdbapi.com/?s=${query}&apikey=${process.env.REACT_APP_OMDB_KEY}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'False') {
          setError(data.Error);
        } else {
          setMovies(data.Search);
        }
        setLoading(false);
      })
      .catch(({ message }) => {
        setError(message);
        setLoading(false);
      });
  }, [query]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <MovieList movies={movies} />{' '}
    </>
  );
};

export default MovieContainer;
