import React from 'react';
import {AppBody} from './app-styled';
import Header from '../header/header';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import Routes from '../../routes/routes';


const App = ({state}) => {

  return (
    <AppBody>
      <Header />
      <Navbar />
      <Routes state={state} />
      <Footer />
    </AppBody>
  );
};

export default App;
