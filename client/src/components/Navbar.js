import React from 'react'; 
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>

        <div className='header-name'>
            <h1>Maktabani</h1>
        </div>

        <div className='navbar-elements'>
            <Link to='/home'>
                <div> <h3>Home</h3> </div>
            </Link>
            <Link to='/books'>
                <div> <h3>Books</h3> </div>
            </Link>
            <Link to='/categories'>
                <div> <h3>Categories</h3> </div>
            </Link>
            <Link to='/favorites'>
                <div> <h3>Favorites</h3> </div>
            </Link>

        </div>
      
    </div>
  )
}

export default Navbar
