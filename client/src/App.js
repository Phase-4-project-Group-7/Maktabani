import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
      <Navbar/>

      <Signup/>

      </Router>
   
=======
       <BooksFetching />
>>>>>>> 501a388 (books fetching successfully set up)
    </div>
  )
}

export default App;
