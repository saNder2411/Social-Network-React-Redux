import React from 'react';
import './profile.css';

const Profile = () => {

  return (
    <main className="profile">
      <div className="profile__banner">
        Banner
      </div>
      <div className="profile__top">
        <div className="profile__avatar">
          <img src="" alt=""/>
          Avatar
        </div>
        <div className="profile__data">
          <h4>Username</h4>
          <p>Date of Birthday: Date of Birthday</p>
          <p>City: City</p>
          <p>Education: Education</p>
          <p>Web Site: web site</p>
        </div>
      </div>
      <div className="profile__bottom">
        User Posts
        <div className="profile__new-post">
          New Post
        </div>
        <div className="profile__posts">
          <ul>
            <li>Post 1</li>
            <li>Post 2</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Profile;