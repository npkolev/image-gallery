import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Sideabr from './Components/Sidebar';
import Content from './Components/Content';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Sideabr />
      <Content />
    </div>
  );
}

export default App;
