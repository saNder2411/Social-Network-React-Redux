import React from 'react';
import {UserPostsBody} from '../styled/styled';
import UserPost from '../user-post/user-post';


const UserPosts = () => {

  return (
    <UserPostsBody>
      User Posts
      <div>
        <textarea rows="10"/>
        <button>Add post</button>
      </div>
      <ul>
        <UserPost post={`Bla-Bla-Bla`} likeCount={23}/>
        <UserPost post={`Bla-Blu-Blu`} likeCount={3}/>
        <UserPost post={`Blu-Bla-Blu`} likeCount={2}/>
      </ul>
    </UserPostsBody>
  );
};

export default UserPosts;