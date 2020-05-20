import styled from 'styled-components';
import {StyledNavLink} from '../reusable-styled-components/reusable-styled-components';


export const StyledNav = styled.nav`
  grid-column: 1 / 2;
  background: linear-gradient(to left, #f3f3f3 0%,#d8d8d8 100%);
`;

export const StyledUl = styled.ul`&& {
  padding: 0px 0px;
  font-size: 18px;
}`;


export const StyledLi = styled.li`&& {
  border-top: 1px solid #f4f4f4;
  border-bottom: 1px solid #d0d0d0;
}`;

export const StyledLink = styled(StyledNavLink)`
  padding: 16px 29px 16px 29px;
  display: block;
  text-decoration: none;
  color: #434343;
  text-shadow: 1px 1px 0px #ffffff;
`;