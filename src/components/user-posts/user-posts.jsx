import React from 'react';
import {StyledUserPostsBody, StyledTextareaContainer} from './uer-posts-styled';
import UserPost from '../user-post/user-post';


const UserPosts = () => {

  return (
    <StyledUserPostsBody>
      <h3>New Post</h3>
      <StyledTextareaContainer>
        <textarea rows="8" placeholder="My new post ..."/>
        <button>Add post</button>
      </StyledTextareaContainer>
      <ul>
        <UserPost post={`My post`} likeCount={23}/>
        <UserPost post={`Mu post`} likeCount={3}/>
        <UserPost post={`My post`} likeCount={2}/>
      </ul>
    </StyledUserPostsBody>
  );
};

export default UserPosts;