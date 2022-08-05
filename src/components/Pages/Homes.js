import React from 'react';
import Home from './Home';
import About from './Experience';
import Project from './Project';
import Techs from './Techs';
import Contact from './Contact';

function Homes() {
  return (
    <div>
      <Home />
      <Techs />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default Homes;
