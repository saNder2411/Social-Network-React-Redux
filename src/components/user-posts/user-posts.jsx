import React from 'react';
import {StyledUserPostsBody, StyledTextareaContainer} from './uer-posts-styled';
import UserPost from '../user-post/user-post';


const UserPosts = ({posts}) => {

  return (
    <StyledUserPostsBody>
      <h3>New Post</h3>
      <StyledTextareaContainer>
        <textarea rows="8" placeholder="My new post ..." />
        <button type="button">Add post</button>
      </StyledTextareaContainer>
      <ul>
        {posts.map(({id, text, likesCount}) => (
          <UserPost key={id} text={text} likesCount={likesCount} />
        ))}
      </ul>
    </StyledUserPostsBody>
  );
};

export default UserPosts;
