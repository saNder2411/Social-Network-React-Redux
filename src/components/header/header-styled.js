import styled from 'styled-components';
import {StyledNavLink} from '../reusable-styled-components/reusable-styled-components';

export const StyledHeader = styled.header`
  padding: 10px 0px;
  min-height: 60px;
  grid-column: 1 / -1;
`;

export const StyledHeaderBar = styled.div`
  min-height: 45px;
  display: grid;
  grid-template-columns: 6fr 6fr;
  gap: 10%;

  background-image: url('/images/bar.png');
  background-repeat: repeat-x;
`;

export const StyledHeaderBarNav = styled.nav`
  border-left: 1px solid #c1611b;
`;

export const StyledMenuTopUl = styled.ul`
  display: flex;

  & li {
    border-left: 1px solid #ffa05c;
    border-right: 1px solid #c1611b;
    text-align: center;
  };
`;

export const StyledMenuLink = styled(StyledNavLink)`
  display: block;
  width: 80px;
  padding-top: 25px;
  height: 20px;
  background-image: url(${({url}) => url});
  background-repeat: no-repeat;
  background-position: center 7px;

  &.active {
      color: white;
      box-shadow: 0 3px 2px 1px rgba(235, 235, 235, .2);
    }
`;
