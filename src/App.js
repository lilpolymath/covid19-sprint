import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Overview from './components/Overview/Overview';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Overview />
    </>
  );
}

export default App;
