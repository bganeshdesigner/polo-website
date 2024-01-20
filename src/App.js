import React from 'react';
import './App.css';
import {About} from './components/About';
import {Nav} from './components/Nav';
import {Slider} from './components/Slider';
import {Parallex} from './components/Parallex';
import {Knowmore} from './components/Knowmore';
import {Touchus} from './components/Touchus';
import {Subscribe} from './components/Subscribe';
import {Footer} from './components/Footer';


function App() {
  return (
    <div>
      <Nav/>
       <Slider/>
        <About/>
        <Parallex/>
        <Knowmore/>
        <Touchus/>
        <Subscribe/>
        <Footer/>
     
    </div>
  );
}

export default App;

