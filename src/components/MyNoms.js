import React from 'react';
import './MyNoms.css';

const MyNoms = ({ nominees, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  const nomineeNodes = nominees.map((nominee, index) => {
    return (
      <li key={index}>
        <div className="image-wrapper">
          <img src={nominee.Poster} alt={nominee.Title} />
          <div className="nominate-wrapper">Remove Nom?</div>
        </div>
      </li>
    );
  });

  return (
    <div className="myNoms">
      <h3>My noms!!</h3>
      <div className="MovieList">
        <ul>{nomineeNodes}</ul>
      </div>
    </div>
  );
};

export default MyNoms;
