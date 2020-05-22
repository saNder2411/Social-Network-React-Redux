import styled from 'styled-components';
import {StyledNavLink} from '../reusable-styled-components/reusable-styled-components';

export const StyledDialogList = styled.ul`
  padding: 20px;
`;

export const StyledDialogNavLink = styled(StyledNavLink)`
  display: block;
  padding: 5px 0;
  padding-bottom: 0;
  font-size: 1rem;
  border-bottom: 1px solid #262626;
`;
