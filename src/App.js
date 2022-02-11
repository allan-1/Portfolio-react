import React from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

// components
import Nav from './components/Nav';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Project from './components/Pages/Project';
import Techs from './components/Pages/Techs';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Techs />
      <Project />
    </div>
  );
}

export default App;
