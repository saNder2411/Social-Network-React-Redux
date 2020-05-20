import React from 'react';
import {StyledDialogNavLink} from './dialog-item-styled';

const DialogItem = ({name, id}) => {

  return (
      <li>
        <StyledDialogNavLink to={`/dialogs/${id}`}>{name}</StyledDialogNavLink>
      </li>
  );
};

export default DialogItem;