import React from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import GotToFive from '../components/GotToFive';

const MovieContainer = ({
  movies,
  nominees,
  handleNomination,
  searchValue,
  setSearchValue,
  loading,
}) => {
  if (nominees.length <= 4) {
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
  }
  if (nominees.length === 5) {
    return <GotToFive />;
  }
};

export default MovieContainer;
