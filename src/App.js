import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Overview from './components/Overview/Overview';
import Contagion from './components/Contagion/Contagion';
import Symptoms from './components/Symptoms/Symptoms';
import Prevention from './components/Prevention/Prevention';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Overview />
      <Contagion />
      <Symptoms />
      <Prevention />
    </>
  );
}

export default App;
