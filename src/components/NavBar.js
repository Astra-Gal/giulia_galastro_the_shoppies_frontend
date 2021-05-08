import React from 'react';
import { Link } from 'react-router-dom';
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
              className="navlink"
            >
              See on GitHub
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
