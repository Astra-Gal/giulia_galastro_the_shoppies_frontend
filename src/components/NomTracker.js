import React from 'react';
import './NomTracker.css';

const NomTracker = ({ nominees }) => {
  if (nominees.length === 0) {
    return (
      <div className="NomTracker">
        <h4>Please nominate 5 movies</h4>
      </div>
    );
  } else if (nominees.length < 4) {
    const nomsRemaining = 5 - nominees.length;
    return (
      <div className="NomTracker">
        <h4>You have {nomsRemaining} nominations remaining</h4>
      </div>
    );
  } else if (nominees.length === 4) {
    return (
      <div className="NomTracker">
        <h4>You have 1 nomination remaining</h4>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default NomTracker;
