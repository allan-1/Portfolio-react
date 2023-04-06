import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Nav from './components/Nav';
import Homes from './components/Pages/Homes';
import Codes from './components/Pages/Codes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Homes />} />
          <Route path="/codes" element={<Codes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
