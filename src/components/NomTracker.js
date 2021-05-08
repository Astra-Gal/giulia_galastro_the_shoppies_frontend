import React from 'react';
import './NomTracker.css';

const NomTracker = ({ nominees }) => {
  if (nominees.length === 0) {
    return (
      <div className="NomTracker">
        <h2>Please nominate 5 movies</h2>
      </div>
    );
  } else if (nominees.length < 4) {
    const nomsRemaining = 5 - nominees.length;
    return (
      <div className="NomTracker">
        <h2>You have {nomsRemaining} nominations remaining</h2>
      </div>
    );
  } else if (nominees.length === 4) {
    return (
      <div className="NomTracker">
        <h2>You have 1 nomination remaining</h2>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default NomTracker;
