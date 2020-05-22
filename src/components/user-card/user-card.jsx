import React from 'react';
import {StyledUserCardBody, StyledUserCardImgContainer, StyledUserCardImg, StyledUserCardBio} from './user-card-styled';

const UserCard = () => {

  return (
    <StyledUserCardBody>
      <StyledUserCardImgContainer>
        <StyledUserCardImg src="https://cdn1.flamp.ru/cbdfd4792aaddd457030e8f03b7b7b63.png" alt="avatar" />
      </StyledUserCardImgContainer>
      <div>
        <h4>Username</h4>
        <StyledUserCardBio>Date of Birthday: Date of Birthday</StyledUserCardBio>
        <StyledUserCardBio>City: City</StyledUserCardBio>
        <StyledUserCardBio>Education: Education</StyledUserCardBio>
        <StyledUserCardBio>Web Site: web site</StyledUserCardBio>
      </div>
    </StyledUserCardBody>
  );
};

export default UserCard;
