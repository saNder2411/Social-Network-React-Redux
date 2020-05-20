import React from 'react';
import {StyledHeader, StyledHeaderBar, StyledHeaderBarNav, StyledMenuTopUl, StyledMenuLink} from './header-styled';


const Header = () => {

  return (
    <StyledHeader>
      <StyledHeaderBar>
        <StyledHeaderBarNav>
          <StyledMenuTopUl>
            <li>
              <StyledMenuLink to="/" exact url={`/images/top-home.png`}>
                Home
              </StyledMenuLink>
            </li>
            <li>
              <StyledMenuLink to="/t" url={`/images/top-activity.png`}>
                Activity
              </StyledMenuLink>
            </li>
            <li>
              <StyledMenuLink to="/r" url={`/images/top-groups.png`}>
                Groups
              </StyledMenuLink>
            </li>
            <li>
              <StyledMenuLink to="/e" url={`/images/top-forum.png`}>
                Forum
              </StyledMenuLink>
            </li>
            <li>
              <StyledMenuLink to="/d" url={`/images/top-users.png`}>
                Members
              </StyledMenuLink>
            </li>
            <li>
              <StyledMenuLink to="/c" url={`/images/top-contact.png`}>
                Contact
              </StyledMenuLink>
            </li>
          </StyledMenuTopUl>
        </StyledHeaderBarNav>
        <div></div>
      </StyledHeaderBar>
      <div>
        <div></div>
        <div></div>
      </div>
    </StyledHeader>
  );
};

export default Header;