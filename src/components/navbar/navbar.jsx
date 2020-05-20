import React from 'react';
import {StyledNav, StyledUl, StyledLi, StyledLink} from './navbar-styled';


const Navbar = () => {

  return (
    <StyledNav>
      <StyledUl>
        <StyledLi >
          <StyledLink to="/" exact>Profile</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/dialogs/">Messages</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/news/">News</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/music/">Music</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to="/settings/">Settings</StyledLink>
        </StyledLi>
      </StyledUl>
    </StyledNav>
  );
};

export default Navbar;