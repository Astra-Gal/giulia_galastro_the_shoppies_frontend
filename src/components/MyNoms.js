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
        <button
          onClick={() => handleRemoveNomination(nominee)}
          className="image-wrapper"
        >
          <div className="red-glow">
            <img src={nominee.Poster} alt={nominee.Title} />
            <div className="nominate-wrapper">
              Remove Nom?
              <div className="titleYear">
                {nominee.Title}({nominee.Year})
              </div>
            </div>
          </div>
        </button>
      </li>
    );
  });

  if (nominees.length === 0) {
    return (
      <div className="myNoms">
        <h3>You haven't nominated anything yet!</h3>
        <Link to="/" className="nomLink">
          Find some movies to nominate <span> &#10154;</span>
        </Link>
      </div>
    );
  } else if (nominees.length <= 4) {
    return (
      <div className="myNoms">
        <Link to="/" className="nomLink">
          Find more movies to nominate <span> &#10154;</span>
        </Link>
        <div className="MovieList">
          <ul>{nomineeNodes}</ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="myNoms">
        <div className="MovieList">
          <ul>{nomineeNodes}</ul>
        </div>
      </div>
    );
  }
};

export default MyNoms;
