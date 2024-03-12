// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './Images/image1.jpg';
import image2 from './Images/image2.jpg';
import image3 from './Images/image3.jpg';
import image4 from './Images/image4.jpg';
import image5 from './Images/image5.jpg';
//import cardImage1 from './images1/cardImage1.jpg'; 
import paris from './Images/paris.jpg'
import hm from './Images/hm.jpg'
import manali from './Images/manali.jpg'
import c1 from './Images/c1.jpg';
import h1 from './Images/h1.jpg';
import h2 from './Images/h2.jpg';
import h3 from './Images/h3.jpg';
import h4 from './Images/h4.jpg';
import h5 from './Images/h5.jpg';
import h6 from './Images/h6.jpg';
import Chill from './ChillPlacesPage';
import './Home.css';
import Nav from './Navbar1';
import Foot from './Footer';

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
    <Nav></Nav>
      <div className="carousel-container1">
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
        <div className="Of-cad">
          <span>OFFERS </span>
        </div>
        <div className="home-card-container">
    <div className="home-card">
        <div className="red-tag">BEST OFFER</div>
        <img src={c1} alt="Hcard 1" />
        <button className="home-cardview-button"></button>
        <div className="text-overlay">
            <p>Taj Mahal</p>
        </div>
    </div>
    <div className="home-card">
        <div className="red-tag">BEST OFFER</div>
        <img src={paris} alt="Hcard 2" />
        <button className="home-cardview-button"></button>
        <div className="text-overlay">
            <p>Paris</p>
        </div>
    </div>
    <div className="home-card">
        <div className="red-tag">BEST OFFER</div>
        <img src={hm} alt="Hcard 3" />
        <button className="home-cardview-button"></button>
        <div className="text-overlay">
            <p>Maldives</p>
        </div>
    </div>
    <div className="home-card">
        <div className="red-tag">BEST OFFER</div>
        <img src={manali} alt="Hcard 4" />
        <button className="home-cardview-button">Educational Packages</button>
        <div className="text-overlay">
            <p>Manali</p>
        </div>
        
    </div>
</div>
<div className="home-country-available">
        Our Happy Clients
      </div>
      <div className="happy-button-container">
<div className="happy-button-row" id="happy-button-row">
  <button className="home-oval-button" style={{ backgroundImage: `url(${h1})` }}></button>
  <button className="home-oval-button" style={{ backgroundImage: `url(${h2})` }}></button>
  <button className="home-oval-button" style={{ backgroundImage: `url(${h3})` }}></button>
  <button className="home-oval-button" style={{ backgroundImage: `url(${h4})` }}></button>
  <button className="home-oval-button" style={{ backgroundImage: `url(${h5})` }}></button>
  
</div>
</div>
<Foot/>
    </>
  );
}



   
   

 
export default Home;