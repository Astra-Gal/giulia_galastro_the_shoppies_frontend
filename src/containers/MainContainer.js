import React from 'react';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';
import MovieContainer from './MovieContainer';

const MainContainer = () => {
  return (
    <>
      <Title />
      <SearchBar />
      <MovieContainer />
    </>
  );
};

export default MainContainer;
