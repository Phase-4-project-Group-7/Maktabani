import React from 'react'; 
import { Link } from "react-router-dom"

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
                    <div> <h3>Home</h3> </div>
                </Link>
                <Link to='/books'>
                    <div> <h3>Books</h3> </div>
                </Link>
                <Link to='/categories'>
                    <div> <h3>Categories</h3> </div>
                </Link>
                <Link to='/reviews'>
                    <div> <h3>Reviews</h3> </div>
                </Link>

            </div>

            <div>
                {user ? (
                <button onClick={handleLogoutClick}>Logout</button>
                ) : (
                <>
                    <Link to="/signup">Signup</Link>

                    <Link to="/login">Login</Link>
                </>
                )}
             </div>
      
        </div>
    </header>
  )
}

export default Navbar;
