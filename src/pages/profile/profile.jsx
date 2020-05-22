import React from 'react';
import {StyledProfileBody, StyledProfileBanner} from './profile-styled';
import UserCard from '../../components/user-card/user-card';
import UserPosts from '../../components/user-posts/user-posts';

const Profile = ({posts}) => {

  return (
    <StyledProfileBody>
      <StyledProfileBanner />
      <UserCard />
      <UserPosts posts={posts} />
    </StyledProfileBody>
  );
};

export default Profile;
