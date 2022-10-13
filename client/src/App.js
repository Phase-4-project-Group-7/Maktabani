import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar';
import Login from "./components/Login";
import Signup from './components/Signup';
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import { Route, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  
  return (
    <>
       <Router>
          <Navbar user={user} setUser={setUser} />
          <Header/>

          <main>
            {user ? (
              <Route path="/">
                <HomePage user={user} /> 
              </Route>
            
           ) : (
             <BrowserRouter>
                <Route path="/signup">
                   <Signup setUser={setUser} />
                </Route>
                <Route path="/login">
                  <Login setUser={setUser} />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
          </BrowserRouter>
           )}


          </main>

       </Router>
    
    </>

  );
}

export default App;
