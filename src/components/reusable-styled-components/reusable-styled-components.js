import styled from 'styled-components';
import {NavLink} from 'react-router-dom';


export const StyledImgLogo = styled.img`
  width: 50px;
`;

export const StyledMain = styled.main`
grid-column: 2 / -1;
display: grid;
gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: #dc9302;
  }
`;
