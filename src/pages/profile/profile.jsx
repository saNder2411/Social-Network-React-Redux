import React from 'react';
import {ProfileBody, ProfileBanner, UserCardBody, UserCardImgContainer, UserPostsBody} from '../../components/styled/styled';

const Profile = () => {

  return (
    <ProfileBody>
      <ProfileBanner>
        Banner
      </ProfileBanner>
      <UserCardBody>
        <UserCardImgContainer>
          <img src="" alt=""/>
          Avatar
        </UserCardImgContainer>
        <div>
          <h4>Username</h4>
          <p>Date of Birthday: Date of Birthday</p>
          <p>City: City</p>
          <p>Education: Education</p>
          <p>Web Site: web site</p>
        </div>
      </UserCardBody>
      <UserPostsBody>
        User Posts
        <div>
          New Post
        </div>
        <ul>
          <li>Post 1</li>
          <li>Post 2</li>
          <li>Post 3</li>
          <li>Post 4</li>
          <li>Post 5</li>
          <li>Post 6</li>
          <li>Post 7</li>
          <li>Post 8</li>
        </ul>
      </UserPostsBody>
    </ProfileBody>
  );
};

export default Profile;