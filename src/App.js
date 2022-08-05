import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Nav from './components/Nav';
import Homes from './components/Pages/Homes';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Homes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
