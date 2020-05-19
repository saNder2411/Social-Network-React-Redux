import React from 'react';


const UserPost = ({post, likeCount}) => {

  return (
    <li>
      <img src="https://cdn1.flamp.ru/cbdfd4792aaddd457030e8f03b7b7b63.png" width="50px" alt="avatar"/>
      <p>{post}</p>
      <div>
        <span>Like</span>
        &nbsp;
        {likeCount}
      </div>
    </li>
  );
};

export default UserPost;