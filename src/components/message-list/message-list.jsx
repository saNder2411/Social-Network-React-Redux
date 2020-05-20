import React from 'react';
import {StyledMessageList} from './message-list-styled'
import MessageItem from '../message-item/message-item';


const MessageList = () => {

  return (
    <StyledMessageList>
      <MessageItem message={`Message`} />
      <MessageItem message={`Message`} />
      <MessageItem message={`Message`} />
      <MessageItem message={`Message`} />
    </StyledMessageList>
  );
};

export default MessageList;