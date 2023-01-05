import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css';
const Navbar = () => {
    return (  
        <nav className="Navbar">
            <div className="navbar_child">
            <h1> FIESTA VIRTUAL OFFICE ASSISTANT</h1>
            </div>
            <div className="navbar_child">
                <Link to='/' className="link">
                <p>Home</p>
                </Link>
                <Link to='/aboutus' className="link">
                <p>About Us</p> 
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;