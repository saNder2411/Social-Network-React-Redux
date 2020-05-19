import React from 'react';
import {NavLink} from 'react-router-dom';
import {NavbarBody, NavbarList} from '../styled/styled';

const Navbar = () => {

  return (
    <NavbarBody>
      <NavbarList>
        <li >
          <NavLink to="/">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/dialogs/">Messages</NavLink>
        </li>
        <li>
          <NavLink to="/news/">News</NavLink>
        </li>
        <li>
        <NavLink to="/music/">Music</NavLink>
        </li>
        <li>
          <NavLink to="/settings/">Settings</NavLink>
        </li>
      </NavbarList>
    </NavbarBody>
  );
};

export default Navbar;