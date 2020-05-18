import React from 'react';
import './main.css';

const Main = () => {

  return (
    <main className="main">
      <div className="main__banner">
        Banner
      </div>
      <div className="main__top">
        <div className="main__avatar">
          <img src="" alt=""/>
          Avatar
        </div>
        <div className="main__data">
          <h4>Username</h4>
          <p>Date of Birthday: Date of Birthday</p>
          <p>City: City</p>
          <p>Education: Education</p>
          <p>Web Site: web site</p>
        </div>
      </div>
      <div className="main__bottom">
        User Posts
        <div className="main__new-post">
          New Post
        </div>
        <div className="main__posts">
          <ul>
            <li>Post 1</li>
            <li>Post 2</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Main;