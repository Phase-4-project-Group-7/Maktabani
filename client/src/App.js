import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import BookList from './components/BookList'
import NewBook from './components/NewBook';
import ReviewList from './components/ReviewList';
import BookDetails from './components/BookDetails'
import NewReview from './components/NewReview'
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {


  return (
    
  
    <div className="App">
      <Router>
       
      <NavBar />
      <Switch>
        <Route exact path='/'><Home/></Route>
        <Route exact path='/books'><BookList/></Route>
        <Route exact path='/reviews'><ReviewList/></Route>
        <Route exact path='/books/:bookId/reviews/new'><NewReview/></Route>
        <Route exact path='/books/new'><NewBook/></Route>
        <Route exact path='/books/:id'><BookDetails/></Route>
        <Route exact path='/sessions/login'><Login/></Route>
        <Route exact path='/users/new'><SignUp/></Route>
        </Switch>
        </Router>
    </div>
    
  );
}

export default App;