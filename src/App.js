import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';

// components
import Nav from './components/Nav';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Project from './components/Pages/Project';

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/project' component={Project}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
