import React from 'react';
import {Link} from 'react-router-dom';
import {NavbarBody, NavbarList} from '../styled/styled';

const Navbar = () => {

  return (
    <NavbarBody>
      <NavbarList>
        <li >
          <Link to="/">Profile</Link>
        </li>
        <li>
          <Link to="/">Messages</Link>
        </li>
        <li>
          <Link to="/">News</Link>
        </li>
        <li>
        <Link to="/">Music</Link>
        </li>
        <li>
          <Link to="/">Settings</Link>
        </li>
      </NavbarList>
    </NavbarBody>
  );
};

export default Navbar;