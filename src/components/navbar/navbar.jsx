import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';


const Navbar = () => {

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link className="navbar__link" to="/">Profile</Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/">Messages</Link>
        </li>
        <li className="navbar__item">
          <Link to="/">News</Link>
        </li>
        <li className="navbar__item">
        <Link className="navbar__link" to="/">Music</Link>
        </li>
        <li className="navbar__item">
          <Link className="navbar__link" to="/">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;