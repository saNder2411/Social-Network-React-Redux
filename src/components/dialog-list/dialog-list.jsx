import React from 'react';
import {StyledDialogList} from './dialog-list-styled';
import DialogItem from '../dialog-item/dialog-item';

const DialogList = ({dialogs}) => {

  return (
    <StyledDialogList>
      {dialogs.map(({id, name}) => (
        <DialogItem id={id} name={name} key={id} />
      ))}
    </StyledDialogList>
  );
};

export default DialogList;
