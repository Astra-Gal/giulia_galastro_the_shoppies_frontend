import React from 'react';
import './NomTracker.css';

const NomTracker = ({ nominees }) => {
  if (nominees.length === 0) {
    return (
      <div className="NomTracker">
        <h4>Nommy nommy nom nom</h4>
      </div>
    );
  } else if (nominees.length <= 4) {
    const nomsRemaining = 5 - nominees.length;
    return (
      <div className="NomTracker">
        <h4>You have {nomsRemaining} nominations remaining</h4>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default NomTracker;
