import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'

// components
import Nav from './components/Nav';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Project from './components/Pages/Project';
import Techs from './components/Pages/Techs';
import Blog from './utils/blog';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Techs />
      <Project />
      <Blog />
    </div>
  );
}

export default App;
