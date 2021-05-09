import React from 'react';
import './About.css';

const About = () => {
  return (
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
    </div>
  );
};

export default About;
