import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from './Images1/logo1.png';
import image1 from './Images1/image1.jpg';
import image2 from './Images1/image2.jpg';
import image3 from './Images1/image3.jpg';
import image4 from './Images1/image4.jpg';
import image5 from './Images1/image5.jpg';
import './Home.css';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
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
            <li><Link to="/home" className="home-nav-link1">Home</Link></li>
            <li><Link to="/ChillPlacesPage" className="home-nav-link">Packages</Link></li>
            <li><Link to="/" className="home-nav-link">Honeymoon</Link></li>
            <li><Link to="/" className="home-nav-link">Contact</Link></li>
            <li><Link to="/login1" className="home-nav-link">Login</Link></li>
            <li><Link to="/sign1" className="home-nav-link">Signup</Link></li>
          </ul>
        </div>
      </nav>
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src={image1} alt="First slide" />
          </div>
          <div>
            <img src={image2} alt="Second slide" />
          </div>
          <div>
            <img src={image3} alt="Third slide" />
          </div>
          <div>
            <img src={image4} alt="Fourth slide" />
          </div>
          <div>
            <img src={image5} alt="Fifth slide" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Home;
