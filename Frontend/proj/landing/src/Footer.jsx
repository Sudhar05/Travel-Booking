import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer(){
    return(
        <>
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
}
export default Footer;