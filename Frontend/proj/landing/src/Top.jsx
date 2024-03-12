import React, { useState } from 'react';
import {Top} from './data.js';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Packages.css';
import Nav from './Navbar1.jsx';
import Footer from './Footer.jsx';
import { Link } from 'react-router-dom';
// Popup Component
function Popup({ handleClose, show, cardInfo }) {
  const showHideClassName = show ? 'popup display-block' : 'popup display-none';
  const handleCloseClick = (event) => {
    event.preventDefault();
    handleClose();
  };
  return (
    <div className={showHideClassName}>
      <section className="popup-main">
        <button className='cls' onClick={handleCloseClick}>X</button>
        <h3>{cardInfo.name}</h3>
        <div className="row">
          <div className='col'>
          <div className="carousel-container">
          <Carousel>
            {cardInfo.image.map((image, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
            
            </div>
            <div className="col">
            <div className="day-plans">
              {Object.entries(cardInfo.dayPlans).map(([day, plan]) => (
                <p>{plan}</p>
              ))}
            </div>
            <div className="details">
              <p>Duration: {cardInfo.duration}</p>
              <p>Country: {cardInfo.country}</p>
              <p>Group Size: {cardInfo.grpsize}</p>
              <p>Language: {cardInfo.language}</p>
              <p>Places Covered: {cardInfo.placesCovered}</p>
              <Link to="/book">
              <button className="book-now-btn">Book Now</button></Link>
              <p></p>
            </div>
          </div>
          </div>
      </section>
    </div>
  );
}

// Card Component
function Card({ onClick, cardInfo }) {
  return (
    <div className="card-contain">
    <div className="packcard" onClick={() => onClick(cardInfo)}>
    <img src={cardInfo.image[0]} alt={cardInfo.name} />
      <h3>{cardInfo.name}</h3>
    </div></div>
  );
}

// App Component
function Packages() {
  var cardData = Top;
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handlePopupToggle = (cardInfo) => {
    setSelectedCard(cardInfo);
    setShowPopup(!showPopup);
  };
  return (
    <>
    <Nav/>
    <div className='body'>
      <h3>Top Rated Packages:</h3>
      <div className='cont'>
        <div className="cardd">
          {cardData.map((card) => (
            <Card key={card.id} onClick={handlePopupToggle} cardInfo={card} />
          ))}
        </div>
        {selectedCard && (
          <Popup show={showPopup} handleClose={handlePopupToggle} cardInfo={selectedCard}>
          </Popup>
        )}
      </div>
      </div>
      <Footer/>
      </>
  );
}

export default Packages;
