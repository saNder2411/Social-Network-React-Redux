import React from 'react';
import {AppBody} from './styled';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Routes from '../../routes/routes';




const App = () => {
  return (
    <AppBody>
      <Header />
      <Navbar />
      <Routes />
      <Footer />
    </AppBody>
  );
}

export default App;