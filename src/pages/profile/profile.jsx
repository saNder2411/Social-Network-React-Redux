import React from 'react';
import {ProfileBody, ProfileBanner} from './profile-styled';
import UserCard from '../../components/user-card/user-card';
import UserPosts from '../../components/user-posts/user-posts';

const Profile = () => {

  return (
    <ProfileBody>
      <ProfileBanner>
        Banner
      </ProfileBanner>
      <UserCard />
      <UserPosts />
    </ProfileBody>
  );
};

export default Profile;