import React from 'react';
import './app.css';
import TopHeader from '../top-header/top-header';
import MainNav from '../main-nav/main-nav';
import Footer from '../footer/footer';
import Main from '../main/main';



const App = () => {
  return (
    <div className="app">
      <TopHeader />
      <MainNav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;