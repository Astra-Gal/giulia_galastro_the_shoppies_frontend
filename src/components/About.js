import React from 'react';
import MerchantOfVenice from '../assets/MerchantOfVenice.png';
import LittleShop from '../assets/LittleShop.png';
import LoveForSale from '../assets/LoveForSale.png';
import CantBuyMeLove from '../assets/CantBuyMeLove.png';
import './About.css';

const About = () => {
  return (
    <>
      <div className="about">
        <h2>A movie award show with a twist...</h2>
        <p>
          (the twist is it's sponsored by
          <a
            href="https://shopify.engineering/"
            rel="noopener noreferrer"
            target="_blank"
            className="ExternalLink"
          >
            {' '}
            Shopify!)
            <br></br>
            <span>
              Opens in new window <span> &#8679;</span>
            </span>
          </a>
        </p>
        <section className="winner-wrapper">
          <h3>
            Previous winners of the <span> sac d'or</span>
          </h3>
          <img
            src={MerchantOfVenice}
            alt="Merchant of Venice"
            className="PrevWinnerImage"
          />
          <p className="PrevWinnerDescription">The Merchant of Venice</p>
          <img
            src={LittleShop}
            alt="Little Shop of Horrors"
            className="PrevWinnerImage"
          />
          <p className="PrevWinnerDescription">Little Shop of Horrors</p>
          <img
            src={CantBuyMeLove}
            alt="Can't Buy Me Love"
            className="PrevWinnerImage"
          />
          <p className="PrevWinnerDescription">Can't Buy Me Love</p>
          <img
            src={LoveForSale}
            alt="Love For Sale"
            className="PrevWinnerImage"
          />
          <p className="PrevWinnerDescription">Love For Sale</p>
        </section>
      </div>
    </>
  );
};

export default About;
