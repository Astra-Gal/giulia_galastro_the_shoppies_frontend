import React from 'react';
import './MovieList.css';

const MovieList = ({
  movies,
  nominees,
  handleNomination,
  handleRemoveNomination,
  loading,
}) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  // filter movies to remove any that don't have link to a poster
  const moviesWithPosters = movies.filter((movie) => {
    return movie.Poster.indexOf('http') !== -1;
  });

  const movieNodes = moviesWithPosters.map((movie, index) => {
    const alreadyInNominees = nominees.some(
      (nominee) => nominee.imdbID === movie.imdbID,
    );
    if (!alreadyInNominees) {
      return (
        <li key={index}>
          <div
            onClick={() => handleNomination(movie)}
            className="image-wrapper"
          >
            <div className="green-glow">
              <img src={movie.Poster} alt={movie.Title} />
              <div className="nominate-wrapper">
                Nominate
                <div className="titleYear">
                  {movie.Title}({movie.Year})
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    } else {
      return (
        <li key={index}>
          <div
            onClick={() => handleRemoveNomination(movie)}
            className="image-wrapper"
          >
            <div className="red-glow">
              <img src={movie.Poster} alt={movie.Title} />
              <div className="nominate-wrapper">
                Remove Nom?
                <div className="titleYear">
                  {movie.Title}({movie.Year})
                </div>
              </div>
            </div>
          </div>
        </li>
      );
    }
  });

  return (
    <div className="MovieList">
      <ul>{movieNodes}</ul>
    </div>
  );
};

export default MovieList;
