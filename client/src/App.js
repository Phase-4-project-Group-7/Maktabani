import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

      <Signup/>

      </Router>
   
    </div>
  );
}

export default App;
