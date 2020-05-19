import React from 'react';
import {NavbarBody, NavbarList} from './navbar-styled';
import {StyledNavLink} from '../reusable-styled-components/reusable-styled-components';

const Navbar = () => {

  return (
    <NavbarBody>
      <NavbarList>
        <li >
          <StyledNavLink to="/" exact>Profile</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/dialogs/">Messages</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/news/">News</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/music/">Music</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings/">Settings</StyledNavLink>
        </li>
      </NavbarList>
    </NavbarBody>
  );
};

export default Navbar;