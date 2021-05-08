import React from 'react';
import './NomTracker.css';

const NomTracker = ({ nominees }) => {
  if (nominees.length === 0) {
    return (
      <div className="NomTracker">
        <p>Make 5 nominations for the prestigious Shoppie Awards!</p>
      </div>
    );
  } else if (nominees.length < 4) {
    const nomsRemaining = 5 - nominees.length;
    return (
      <div className="NomTracker">
        <p>You have {nomsRemaining} nominations left</p>
      </div>
    );
  } else if (nominees.length === 4) {
    return (
      <div className="NomTracker">
        <p>You have 1 nomination left</p>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default NomTracker;
