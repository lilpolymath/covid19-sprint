import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Overview from './components/Overview/Overview';
import Contagion from './components/Contagion/Contagion';
import Symptoms from './components/Symptoms/Symptoms';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Overview />
      <Contagion />
      <Symptoms />
    </>
  );
}

export default App;
