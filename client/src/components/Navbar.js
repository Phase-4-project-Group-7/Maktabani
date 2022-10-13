import React from 'react'; 
import { Link } from "react-router-dom"
import '../styles/Navbar.css'

const Navbar = ( {user, setUser}) => {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }
  return (
      <header>
        <div className='navbar'>

            <div className='header-name'>
                <h1>Maktabani</h1>
            </div>

            <div className='navbar-elements'>
                <Link to='/'>
                     <h3>Home</h3> 
                </Link>
                <Link to='/books'>
                    <h3>Books</h3> 
                </Link>
                <Link to='/categories'>
                     <h3>Categories</h3>
                </Link>
                <Link to='/reviews'>
                    <h3>Reviews</h3> 
                </Link>

            </div>

            <div className='authorize'>
                {user ? (
                <button onClick={handleLogoutClick}>Logout</button>
                ) : (
                <div className='buttons'>
                    <Link to="/signup" className='signup'>Signup</Link>

                    <Link to="/login" className='login'>Login</Link>
                </div>
                )}
             </div>
      
        </div>
    </header>
  )
}

export default Navbar;
