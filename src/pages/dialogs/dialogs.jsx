import React from 'react';
import {StyledDialogsBody} from './dialogs-styled';
import DialogList from '../../components/dialog-list/dialog-list';
import MessageList from '../../components/message-list/message-list';


const Dialogs = () => {

  return (
    <StyledDialogsBody>
        <DialogList />
        <MessageList />
    </StyledDialogsBody>
  );
};

export default Dialogs;