import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, handleNomination, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  // filter movies to remove any that don't have link to a poster
  const moviesWithPosters = movies.filter((movie) => {
    return movie.Poster.indexOf('http') !== -1;
  });

  const movieNodes = moviesWithPosters.map((movie, index) => {
    return (
      <li key={index}>
        <div onClick={() => handleNomination(movie)} className="image-wrapper">
          <img src={movie.Poster} alt={movie.Title} />
          <div className="nominate-wrapper">
            Nominate
            <svg
              xmlns="http://www.w3.org/200/svg"
              xlink="http://www.w3.org/1999/xlink"
              width="40px"
              height="40px"
              viewBox="0 0 450 100"
            >
              <polygon
                fill="white"
                stroke="black"
                points="279,5 294,35 328,40 303,62 309,94 279,79 248,94 254,62 230,39 263,35"
              />
            </svg>
          </div>
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
