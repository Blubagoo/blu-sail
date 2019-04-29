import React from 'react';

import SiteHead from './components/site-head';
import NavigationBar from './components/nav-bar';
import MainContentTop from './components/main-top';
import BannerTop from './components/banner-top';
import MainContentBottom from './components/main-bottom';
import Footer from './components/footer';




import './App.css';



function App() {
  return (
    <div className="App">
      <SiteHead />
      <NavigationBar />
      <MainContentTop />
      <BannerTop />
      <MainContentBottom />
      <Footer />
    </div>
  );
}

export default App;
