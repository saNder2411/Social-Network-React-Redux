import React from 'react';
import {DialogsBody, DialogsList, MessageList} from './dialogs-styled';
import {StyledNavLink} from '../../components/reusable-styled-components/reusable-styled-components';


const Dialogs = () => {

  return (
    <DialogsBody>
      <div>
        <DialogsList>
          <li>
            <StyledNavLink to="/dialogs/:1">Valera</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/dialogs/:2">SanaLan</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/dialogs/:3">Vector</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/dialogs/:4">Boris</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/dialogs/:5">Petro</StyledNavLink>
          </li>
        </DialogsList>
      </div>
      <div>
        <MessageList>
          <li>Message</li>
          <li>Message</li>
          <li>Message</li>
          <li>Message</li>
          <li>Message</li>
        </MessageList>
      </div>
    </DialogsBody>
  );
};

export default Dialogs;