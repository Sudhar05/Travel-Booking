import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css'; 
import logo from './Images1/logo1.png';
const Navbar1 = () => {
  return (
    <>
    <nav className="home-navbar">
        <div className="home-navbar-left">
          <img src={logo} alt="Company Logo" className="home-logo" />
        </div>
        <div className="home-company-name">
            <span>Chill Your Will</span>
        </div>
        <div className="home-navbar-right">
          <ul className="home-nav-items">
          <li><Link to='/home' className="home-nav-link">Home</Link></li> 
            <li><Link to="/ChillPlacesPage" className="home-nav-link">Packages</Link></li> 
            <li><Link to="/honey" className="home-nav-link">Honeymoon</Link></li>
            <li><Link to="/cont" className="home-nav-link">Contact</Link></li>
            <li><Link to="/login1" className="home-nav-link">Login</Link></li>
            <li><Link to="/sign1" className="home-nav-link">Signup</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
