import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <>
    <nav className="forest-navbar">
      <div className="forest-navbar-container">
        <div className="forest-navbar-item">
          <Link to="/signup" className="tree-link">Sign Up</Link> 
        </div>
        <div className="forest-navbar-item">
          <Link to="/login" className="tree-link" >Login</Link> 
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
