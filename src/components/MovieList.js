import React from 'react';

const MovieList = ({ movies }) => {
  if (!movies) {
    return <p>Loading...</p>;
  }

  const movieNodes = movies.map((movie, index) => {
    return (
      <li key={index}>
        <img src={movie.Poster} alt={movie.Title} />
      </li>
    );
  });

  return (
    <>
      <ul>{movieNodes}</ul>
    </>
  );
};

export default MovieList;
