import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'; 
import logo from './images/logo.png';
import './landing.css';

function Landing1() {
    return (
        <>
        <style>
            {`@keyframes changeBackground {
    0% { background-image: url('./images/image1.jpg');  opacity: 0.5; }
    25% { background-image: url('./images/image2.jpg');  opacity: 0.7;}
    50% { background-image: url('./images/image3.jpg');  opacity: 0.8; }
    75% { background-image: url('./images/image4.jpg');  opacity: 0.7;}
    100% { background-image: url('./images/image1.jpg');  opacity: 0.5;}
  }
  
  body {
    animation: changeBackground 20s infinite; 
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); 
  }`}
        </style>
            <Navbar />
            <div className="logo3-container">
                <img src={logo} alt="Logo" className="logo3" />
            </div>
            <div>
                <Link to="/home" className="travel-button">Let's Travel</Link>
            </div>
        </>
    );
}

export default Landing1;
