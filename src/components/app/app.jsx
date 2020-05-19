import React from 'react';
import {AppBody} from './styled';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Profile from '../../pages/profile/profile';




const App = () => {
  return (
    <AppBody>
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </AppBody>
  );
}

export default App;