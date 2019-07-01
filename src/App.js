import React from 'react';
import Sideabr from './Components/Sidebar';
import ImageGallery from './Components/ImageGallery';
import Header from './Components/Header';
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Sideabr />
      <ImageGallery />
    </div>
  );
}

export default App;
