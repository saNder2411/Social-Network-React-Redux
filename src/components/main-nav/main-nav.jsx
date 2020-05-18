import React from 'react';
import {Link} from 'react-router-dom';
import './main-nav.css';


const MainNav = () => {

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <Link className="main-nav__link" to="/">Profile</Link>
        </li>
        <li className="main-nav__item">
          <Link className="main-nav__link" to="/">Messages</Link>
        </li>
        <li className="main-nav__item">
          <Link to="/">News</Link>
        </li>
        <li className="main-nav__item">
        <Link className="main-nav__link" to="/">Music</Link>
        </li>
        <li className="main-nav__item">
          <Link className="main-nav__link" to="/">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;