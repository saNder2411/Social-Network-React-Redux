import React from 'react';
import {StyledProfileBody, StyledProfileBanner} from './profile-styled';
import UserCard from '../../components/user-card/user-card';
import UserPosts from '../../components/user-posts/user-posts';

const Profile = () => {

  // fetch(` https://social-network.samuraijs.com/api/1.0/users`)
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  return (
    <StyledProfileBody>
      <StyledProfileBanner />
      <UserCard />
      <UserPosts />
    </StyledProfileBody>
  );
};

export default Profile;