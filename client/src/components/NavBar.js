import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <NavLink className="navbar_link" to="/">Home</NavLink>
      <NavLink className="navbar_link" to="/books">Book List</NavLink>
      <NavLink className="navbar_link" to="/reviews">Reviews</NavLink>
      <NavLink className="navbar_link" to="/books/new">Add New Book</NavLink>
      <NavLink className="navbar_link" to="/sessions/login">Sign In</NavLink>
      <NavLink className="navbar_link" to="/users/new">Sign Up</NavLink>
    </div>
  )
}

export default NavBar
