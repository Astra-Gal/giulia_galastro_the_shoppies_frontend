import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, handleNomination }) => {
  if (!movies) {
    return <p>Loading...</p>;
  }

  const movieNodes = movies.map((movie, index) => {
    return (
      <li key={index}>
        <div className="image-wrapper">
          <img src={movie.Poster} alt={movie.Title} />
          <button onClick={handleNomination}>Nominate</button>
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
