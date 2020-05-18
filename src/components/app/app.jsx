import React from 'react';
import './app.css';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Profile from '../../pages/profile/profile';




const App = () => {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;