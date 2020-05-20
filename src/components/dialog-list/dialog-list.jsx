import React from 'react';
import {StyledDialogList} from './dialog-list-styled';
import DialogItem from '../dialog-item/dialog-item';

const DialogList = () => {

  return (
    <StyledDialogList>
      <DialogItem name={`Freddy`} id={`1`} />
      <DialogItem name={`Bob`} id={`2`} />
      <DialogItem name={`Lisa`} id={`3`} />
      <DialogItem name={`Ava`} id={`4`} />
      <DialogItem name={`Rena`} id={`5`} />
    </StyledDialogList>
  );
};

export default DialogList;