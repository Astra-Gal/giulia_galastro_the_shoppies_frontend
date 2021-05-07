import React from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import GotToFive from '../components/GotToFive';

const MovieContainer = ({
  movies,
  nominees,
  handleNomination,
  handleRemoveNomination,
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
          nominees={nominees}
          handleNomination={handleNomination}
          handleRemoveNomination={handleRemoveNomination}
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
