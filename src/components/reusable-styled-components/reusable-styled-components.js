import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const ImgLogo = styled.img`
  width: 50px;
`;

export const PageBody = styled.main`
grid-column: 2 / -1;
display: grid;
gap: 10px;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: sandybrown;
  }
`;
