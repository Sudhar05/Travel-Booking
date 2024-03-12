import React from 'react';
import './ChillPlacesPage.css';
import cardImage1 from './images1/cardImage1.jpg'; 
import cardImage2 from './images1/cardImage2.jpg';
import cardImage3 from './images1/cardImage3.jpg';
import cardImage4 from './images1/cardImage4.jpg';
import cardImage5 from './images1/cardImage5.jpg';
import cardImage6 from './images1/cardImage6.jpg';
import buttonImage1 from './images1/button1.jpg';
import buttonImage2 from './images1/button2.jpg';
import buttonImage3 from './images1/button3.jpg';
import buttonImage4 from './images1/button4.jpg';
import buttonImage5 from './images1/button5.jpg';
import backgroundimage from './images1/background1.jpg'
import image1 from './images1/circleimage1.jpg';
import image2 from './images1/circleimage2.jpg';
import image3 from './images1/circleimage3.jpg';
import logo from './Images/logo1.png';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


const ChillPlacesPage = () => {
  return (
    <>
    <div class="container">
 
    <div className="chill-places-page">
    <nav className="chill-navbar">
        <div className="navbar-left">
          <img src={logo} alt="Company Logo" className="logo" />
          <div className="company-name">
            <span>Chill Your Will</span>
          </div>
        </div>
        <div className="navbar-right">
          <ul className="nav-items">
          <li><Link to='/' className="nav-link">Home</Link></li> 
            <li><Link to="/ChillPlacesPage" className="nav-link1">Packages</Link></li> 
            <li><Link to="/" className="nav-link">Honeymoon</Link></li>
            <li><Link to="/" className="nav-link">Contact</Link></li>
            <li><Link to="/login" className="nav-link">Login</Link></li>
            <li><Link to="/sign" className="nav-link">Signup</Link></li>
          </ul>
        </div>
      </nav>
    </div>
      <div className="image-background">
        <div className="chill-text">Places to Chill</div>
      </div>
      <div className="popular-packages">
        Popular Packages
      </div>
    <div className="card-container">
            <div className="card">
              <img src={cardImage1} alt="Card 1" />
              <button className="view-button">India Tour Packages</button> 
            </div>
            <div className="card">
              <img src={cardImage2} alt="Card 2" />
              <button className="view-button">Europe Tour Packages</button> 
            </div>
            <div className="card">
              <img src={cardImage3} alt="Card 3" />
              <button className="view-button">Honeymoon Packages</button> 
            </div>
            <div className="card">
              <img src={cardImage4} alt="Card 4" />
              <button className="view-button">Educational Packages</button> 
            </div>
    </div>
    
    
      <div className="card1-container">
            <div className="card">
              <img src={cardImage5} alt="Card 1" />
              <button className="view-button">International Tour Packages</button> 
            </div>
            <div className="card">
              <img src={cardImage6} alt="Card 2" />
              <button className="view-button">Top Rated Packages</button> 
            </div>
    </div>
    <div className="country-available">
        Country's To-Visit
      </div>

      <div className="button-container">
  <div className="button-row">
    <button className="oval-button" style={{backgroundImage: `url(${buttonImage1})`}}>India</button>
    <button className="oval-button" style={{backgroundImage: `url(${buttonImage2})`}}>Bhutan</button>
    <button className="oval-button" style={{backgroundImage: `url(${buttonImage3})`}}>Vietnam</button>
    <button className="oval-button" style={{backgroundImage: `url(${buttonImage4})`}}>Thailand</button>
    <button className="oval-button" style={{backgroundImage: `url(${buttonImage5})`}}>Singapore</button>
  </div>

</div>

<div className="section-container" style={{backgroundImage: `url(${backgroundimage})`}}>
  <div className="dimmer"></div> 
  <div className="section-content">
    <h2 style={{textAlign: 'center'}}><strong>WHY CHOOSE US?</strong></h2>
    <p style={{textAlign: 'center'}}>A BRAND NAME YOU CAN TRUST AND RELY ON</p>
  </div>


<div className="columns-container">
  <div className="column">
  <img src={image1} alt="Image 1" className="column-image" />
    <h3><strong>AFFORDABLE PRICE GUARANTEE</strong></h3>
    <p>Quality service at unbeatable prices - our commitment to affordability ensures your satisfaction.</p>
  </div>
  <div className="column">
  <img src={image2} alt="Image 2" className="column-image" />
    <h3>WIDE VARIETY OF DESTINATIONS</h3>
    <p>Explore our diverse range of destinations, each offering a unique and unforgettable experience.</p>
  </div>
  <div className="column">
  <img src={image3} alt="Image 3" className="column-image" />
    <h3>HIGHLY QUALIFIED SERVICES</h3>
    <p>Expertly curated experiences tailored to your needs, ensuring the utmost satisfaction.</p>
  </div>
</div>
</div>

        </div>
        <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Discover a world of relaxation and adventure with Chill Your Will, where we specialize in crafting personalized journeys tailored to your desires.</p>
        </div>
        
        <div className="footer-section">
          <h3>Menu</h3>
          <a href='#' target='_blank' rel='noopener noreferrer'><span style={{color:'white' }}>  Home </span></a><br></br>
          <a href='#' target='_blank' rel='noopener noreferrer'><span style={{color:'white' }}>Packages </span></a><br></br>
          <a href='#' target='_blank' rel='noopener noreferrer'><span style={{color:'white' }}>Honeymoon </span></a><br></br>
          <a href='#' target='_blank' rel='noopener noreferrer'><span style={{color:'white' }}>Login</span></a><br></br>
          <a href='#' target='_blank' rel='noopener noreferrer'><span style={{color:'white' }}>Signup </span></a>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: chill_ur_will@tour.com</p>
          <p>Phone: +1234567890</p>
        </div>

        <div className="footer-section">
          <h3>Follow us</h3>
          <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '40px', color: '#4267B2' }} />
          </a>
          <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '40px', color: '#E4405F' }} />
          </a>
          <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '40px', color: '#1DA1F2' }} />
          </a>
        </div> 
      </div>
      <div className="footer-bottom">
      <p><span style={{color: 'lightgreen'}}>&copy;</span> 2024 Tour Travel Booking. All rights reserved.</p>
        
      </div>
    </footer>

    </>
  );
};

export default ChillPlacesPage;