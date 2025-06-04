import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/loading';  // Import the Loading component
import LandingPage from './components/landingPage';
import About from './components/navigateAbout/nAbout';
import Iting from './components/projectPages/iting';
import Airline from './components/projectPages/airline';
import Music from './components/projectPages/music';
import Game from './components/projectPages/game';
import Python from './components/projectPages/python';
import Unispot from './components/projectPages/unispot';
import Unidemo from './components/projectPages/unidemo';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading process
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // After 3 seconds, set loading to false
    }, 3000); // loading timer
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading /> 
      ) : (
        <BrowserRouter future={{ v7_startTransition: true }}>
          <Routes>
            <Route path='/' Component={LandingPage}></Route>
            <Route path='/about' Component={About}></Route>
            <Route path='/projects/it-tracker' Component={Iting}></Route>
            <Route path='/projects/music-app' Component={Music}></Route>
            <Route path='/projects/airline-reservation' Component={Airline}></Route>
            <Route path='/projects/python-game' Component={Python}></Route>
            <Route path='/projects/royal-rumble' Component={Game}></Route>
            <Route path='/projects/unispot' Component={Unispot}></Route>
            <Route path='/projects/unidemo' Component={Unidemo}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
