import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom'; 
import logo from './images_1/logo.png';
import image1 from './Images/image1.jpg';
import image2 from './Images/image2.jpg';
import image3 from './Images/image3.jpg';
import image4 from './Images/image4.jpg';
import './landing.css';

function Landing1() {
    const images = [image1, image2, image3, image4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 2000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            <Navbar />
            <style>
            {`
                .landing-container {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    overflow: hidden;
                }
                
                .background-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    object-fit: cover;
                    z-index: -1;
                    margin-top:0;
                }
                
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                }
                
                .content {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    z-index: 1;
                }
                
                .logo-container {
                    margin-bottom: 20px;
                }
                
                .logo {
                    width: 200px;
                    height: auto;
                }
                
                .travel-button {
                    background-color: #44d62c;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    outline: none;
                    border-radius: 5px;
                    transition: transform 0.3s, box-shadow 0.3s;
                    text-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
                    margin-bottom:-80px;
                    margin-left:15px;
                }
                
                .travel-button:hover {
                    transform: scale(1.1);
                    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
                }
                
                .travel-button:active {
                    transform: scale(0.9);
                }
            `}
        </style>
            <div className="background-container">
                <img src={images[currentImageIndex]} alt="Background" className="background-image" />
                <div className="overlay"></div>
                <div className="logo3-container">
                    <img src={logo} alt="Logo" className="logo3" />
                </div>
                <div>
                    <Link to="/home" className="travel-button">Let's Travel</Link>
                </div>
            </div>
        </>
    );
}

export default Landing1;
