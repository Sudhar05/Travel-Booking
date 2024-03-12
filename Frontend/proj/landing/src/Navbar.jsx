import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <>
    <style>
      {
        `.forest-navbar-item {
          margin-right: 20px;
          cursor: pointer;
          font-weight: bold;
          padding: 8px 12px; 
          margin-top: 2px;
          transition: background-color 0.3s ease, color 0.3s ease, padding 0.3s ease, font-size 0.3s ease; 
        }`
      }
    </style>
    <nav className="forest-navbar">
      <div className="forest-navbar-container">
        <div className="forest-navbar-item">
          <Link to="/Sign" className="tree-link">Sign Up</Link> 
        </div>
        <div className="forest-navbar-item">
          <Link to="/LoginPage" className="tree-link" >Login</Link> 
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
