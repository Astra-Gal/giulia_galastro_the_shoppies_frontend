import React from 'react';
import MerchantOfVenice from '../assets/MerchantOfVenice.png';
import LittleShop from '../assets/LittleShop.png';
import LoveForSale from '../assets/LoveForSale.png';
import './About.css';

const About = () => {
  return (
    <>
      <div className="about">
        <h2>A movie award show with a twist...</h2>
        <p>(the twist is it's not real!)</p>
        <section className="winner-wrapper">
          <h3>
            Previous winners of the <span> palme d'argent</span> :
          </h3>
          <img
            src={MerchantOfVenice}
            alt="Merchant of Venice movie poster"
            className="PrevWinnerImage"
          />
          <p className="PrevWinnerDescription">The Merchant of Venice</p>
          <img
            src={LittleShop}
            alt="Little Shop of Horrors movie poster"
            className="PrevWinnerImage"
          />
          <p className="PrevWinnerDescription">Little Shop of Horrors</p>

          <img
            src={LoveForSale}
            alt="Love For Sale movie poster"
            className="PrevWinnerImage"
          />
          <p className="PrevWinnerDescription">Love For Sale</p>
        </section>
      </div>
    </>
  );
};

export default About;
