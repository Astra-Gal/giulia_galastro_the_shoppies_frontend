import React from 'react';
import './MovieList.css';

const MovieList = ({ movies }) => {
  // ,handleNomination
  if (!movies) {
    return <p>Loading...</p>;
  }
  // filter movies to remove any that don't have link to a poster
  const moviesWithPosters = movies.filter((movie) => {
    return movie.Poster.indexOf('http') !== -1;
  });

  const movieNodes = moviesWithPosters.map((movie, index) => {
    return (
      <li key={index}>
        <div className="image-wrapper">
          <img src={movie.Poster} alt={movie.Title} />
          <div className="nominate-wrapper">Nominate</div>
        </div>
      </li>
    );
  });

  return (
    <div className="MovieList">
      <ul>{movieNodes}</ul>
    </div>
  );
};

export default MovieList;
