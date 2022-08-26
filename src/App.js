import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Nav from './components/Nav';
import Homes from './components/Pages/Homes';
import Codes from './components/Pages/Codes';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Homes} />
          <Route path="/codes" component={Codes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
