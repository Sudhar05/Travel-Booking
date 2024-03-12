import React from 'react';
import './ChillPlacesPage.css';
import cardImage1 from './images_1/cardImage1.jpg'; 
import cardImage2 from './images_1/cardImage2.jpg';
import cardImage3 from './images_1/cardImage3.jpg';
import cardImage4 from './Island/6.png';
import cardImage5 from './images_1/cardImage5.jpg';
import cardImage6 from './images_1/cardImage6.jpg';
import buttonImage1 from './images_1/button1.jpg';
import buttonImage2 from './images_1/button2.jpg';
import buttonImage3 from './images_1/button3.jpg';
import buttonImage4 from './images_1/button4.jpg';
import buttonImage5 from './images_1/button5.jpg';
import backgroundimage from './images_1/background1.jpg'
import image1 from './images_1/circleimage1.jpg';
import image2 from './images_1/circleimage2.jpg';
import image3 from './images_1/circleimage3.jpg';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Nav from './Navbar1';

const ChillPlacesPage = () => {
  return (
    <>
    <Nav/>
    <div className="container">
 
    <div className="chill-places-page">
      
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
              <Link to="/india" className="view-button">India Tour Packages</Link> 
            </div>
            <div className="card">
              <img src={cardImage2} alt="Card 2" />
              <Link to="/euro" className="view-button">Europe Tour Packages</Link> 
            </div>
            <div className="card">
              <img src={cardImage3} alt="Card 3" />
              <Link to="/honey" className="view-button">Honeymoon Packages</Link> 
            </div>
            <div className="card">
              <img src={cardImage4} alt="Card 4" />
              <Link to="/island" className="view-button">Island Packages</Link> 
            </div>
    </div>
    
    
      <div className="card1-container">
            <div className="card">
              <img src={cardImage5} alt="Card 1" />
              <Link to="/inter" className="view-button">International Tour Packages</Link> 
            </div>
            <div className="card">
              <img src={cardImage6} alt="Card 2" />
              <Link to="/top" className="view-button">Top Rated Packages</Link> 
            </div>
    </div>
    <div className="country-available">
        Country's To-Visit
      </div>

      <div className="button-container">
  <div className="button-row">
    <Link to="/india" className="oval-button" style={{backgroundImage: `url(${buttonImage1})`}}>India</Link>
    <Link to="/dubai" className="oval-button" style={{backgroundImage: `url(${buttonImage2})`}}>Dubai</Link>
    <Link to="/hong" className="oval-button" style={{backgroundImage: `url(${buttonImage3})`}}>Hong Kong</Link>
    <Link to="/thai" className="oval-button" style={{backgroundImage: `url(${buttonImage4})`}}>Thailand</Link>
    <Link to="/spml" className="oval-button" style={{backgroundImage: `url(${buttonImage5})`}}>Singapore <br /> Malaysia</Link>
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
          <Link to="/" href='#' target='_blank' rel='noopener noreferrer'><span style={{color:'white' }}>  Home </span></Link><br></br>
          <Link to="/ChillPlacesPage" href='#' target='_blank' rel='noopener noreferrer'><span style={{color:'white' }}>Packages </span></Link><br></br>
          <Link to="/honey" href='#' target='_blank' rel='noopener noreferrer'><span style={{color:'white' }}>Honeymoon </span></Link><br></br>
          <Link to="/login1" href='#' target='_blank' rel='noopener noreferrer'><span style={{color:'white' }}>Login</span></Link><br></br>
          <Link to="/sign1" href='#' target='_blank' rel='noopener noreferrer'><span style={{color:'white' }}>Signup </span></Link>
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