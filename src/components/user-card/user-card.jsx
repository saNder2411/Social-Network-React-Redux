import React from 'react';
import {UserCardBody, UserCardImgContainer} from './user-card-styled';

const UserCard = () => {

  return (
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
  );
};

export default UserCard;