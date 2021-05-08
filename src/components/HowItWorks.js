import React from 'react';
import { Link } from 'react-router-dom';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="HowItWorks">
      <h2>How it works</h2>
      <ol>
        <li>Search for your favourite movies to nominate</li>
        <li>Nominate a movie by clicking on it</li>
        <li>
          Changed your mind? Remove your nomination by clicking the movie again
        </li>
        <li>
          Go to <Link to="/my-nominations">My Nominations</Link> to view or edit
          your list
        </li>
      </ol>
    </div>
  );
};

export default HowItWorks;
