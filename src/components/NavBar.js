import React from 'react';
import { Link } from 'react-router-dom';
import GitHubLogo from '../assets/GitHubLogo.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/" className="navlink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navlink">
              About
            </Link>
          </li>
          <li>
            <Link to="/my-nominations" className="navlink">
              My Nominations
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/Astra-Gal/giulia_galastro_the_shoppies_frontend"
              rel="noopener noreferrer"
              target="_blank"
              className="ExternalLink"
            >
              <span>
                Opens in new window <span> &#8679;</span>
              </span>
              <img src={GitHubLogo} className="GitHubLogo" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
