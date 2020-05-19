import styled from 'styled-components';
import {PageBody} from '../../components/reusable-styled-components/reusable-styled-components';

export const DialogsBody = styled(PageBody)`
  grid-template-columns: 3fr 9fr;
  min-height: 25rem;
  background-color: tomato;
`;

export const DialogsList = styled.ul`
  padding: 20px;
`;

export const MessageList = styled.ul`
  padding: 20px;
`;

