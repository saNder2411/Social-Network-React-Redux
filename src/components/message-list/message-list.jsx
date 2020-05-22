import React from 'react';
import {StyledMessageList} from './message-list-styled';
import MessageItem from '../message-item/message-item';


const MessageList = ({messages}) => {

  return (
    <StyledMessageList>
      {messages.map(({id, message}) => (
        <MessageItem id={id} message={message} key={id} />
      ))}
    </StyledMessageList>
  );
};

export default MessageList;
