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
      <main>
        <Hero />
        <Overview />
        <Contagion />
        <Symptoms />
        <Prevention />
        <footer className='desc'>
          &copy; 2020 All rights reserved by pixelspark.co.
        </footer>
      </main>
    </>
  );
}

export default App;
