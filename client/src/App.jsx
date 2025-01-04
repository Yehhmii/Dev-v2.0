import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import LandingPage from './components/landingPage'
import About from './components/navigateAbout/nAbout'
import Iting from './components/projectPages/iting';
import Airline from './components/projectPages/airline';
import Music from './components/projectPages/music';
import Game from './components/projectPages/game';
import Python from './components/projectPages/python';

function App() {

  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <Routes>
          <Route path='/' Component={LandingPage}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/projects/it-tracker' Component={Iting}></Route>
          <Route path='/projects/music-app' Component={Music}></Route>
          <Route path='/projects/airline-reservation' Component={Airline}></Route>
          <Route path='/projects/python-game' Component={Python}></Route>
          <Route path='/projects/royal-rumble' Component={Game}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
