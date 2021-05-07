import React from 'react';
import { Link } from 'react-router-dom';
import './MyNoms.css';

const MyNoms = ({ nominees, handleRemoveNomination, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  const nomineeNodes = nominees.map((nominee, index) => {
    return (
      <li key={index}>
        <div
          onClick={() => handleRemoveNomination(nominee)}
          className="image-wrapper"
        >
          <img src={nominee.Poster} alt={nominee.Title} />
          <div className="nominate-wrapper">Remove Nom?</div>
          <div className="titleYear">
            {movie.Title}({movie.Year})
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="myNoms">
      {nominees.length === 0 ? (
        <>
          <h3>No noms yet!!</h3>
          <Link to="/" className="nomLink">
            Search for movies to nominate <span> &#10154;</span>
          </Link>
        </>
      ) : (
        <>
          <h3>My noms!!</h3>
          <div className="MovieList">
            <ul>{nomineeNodes}</ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MyNoms;
