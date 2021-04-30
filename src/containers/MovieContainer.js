import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
// import Request from "../helpers/request";

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [nominees, setNominees] = useState([]);

  const handleNomination = (movie) => {
    const newNomineesList = [...nominees, movie];
    setNominees(newNomineesList);
  };

  useEffect(() => {
    setLoading(true);

    fetch(
      `http://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_OMDB_KEY}`,
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
  }, [searchValue]);

  // if (loading) {
  //   return <p>Loading...searchValue
  // }

  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList movies={movies} />
    </>
  );
};

export default MovieContainer;
