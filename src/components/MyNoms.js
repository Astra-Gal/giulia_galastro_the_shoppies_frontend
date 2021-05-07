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
          <div className="red-glow">
            <img src={nominee.Poster} alt={nominee.Title} />
            <div className="nominate-wrapper">
              Remove Nom?
              <div className="titleYear">
                {nominee.Title}({nominee.Year})
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="myNoms">
      <div className="MovieList">
        <ul>{nomineeNodes}</ul>
      </div>
    </div>
  );
};

export default MyNoms;
