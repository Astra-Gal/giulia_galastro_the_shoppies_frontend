import React from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
// import Request from "../helpers/request";

const MovieContainer = ({
  movies,
  handleNomination,
  searchValue,
  setSearchValue,
  loading,
}) => {
  return (
    <>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <MovieList
        movies={movies}
        handleNomination={handleNomination}
        loading={loading}
      />
    </>
  );
};

export default MovieContainer;
