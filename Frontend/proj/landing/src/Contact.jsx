import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './ContactBook.css';
import Nav from './Navbar1';
import Footer from './Footer';

const Contact = () => {
  const form = useRef();
  const [destination, setDestination] = useState('');
  const [randomPrice, setRandomPrice] = useState(null);

  useEffect(() => {
    // Generate a random price between 20000 and 250000
    const price = Math.floor(Math.random() * 100);
    setRandomPrice(price * 2000);
  }, [destination]);

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_logdq4e', 'template_r2bp0ut', form.current, {
        publicKey: 'DGXODzfJkLgwgkjQE',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Nav />
      <section className='ff'>
        <div className='booking-form-container'>
          <h2>Book Your Tour Travel</h2>
          <form ref={form} onSubmit={sendEmail}>
            <div>
              <label><b>FirstName:</b></label>
              <input type="text" name='user_namef' required />
            </div>
            <div>
              <label><b>Last Name:</b></label>
              <input type="text" name='user_namel' required />
            </div>
            <div>
              <label><b>Email:</b></label>
              <input type="email" name="user_email" required />
            </div>
            <div>
              <label><b>Phone Number:</b></label>
              <input type="tel" name="phoneNumber" required />
            </div>
            <div>
              <label><b>Destination:</b></label>
              <input type="text" name="destination" required value={destination} onChange={handleDestinationChange} />
            </div>
            {destination && (
              <div>
                <label><b>Price:</b></label>
                <input type="text" name="price" defaultValue={randomPrice} readOnly />
              </div>
            )}
            <div>
              <label><b>Departure Date:</b></label>
              <input type="date" name="departureDate" required />
            </div>
            <div>
              <label><b>Return Date:</b></label>
              <input type="date" name="returnDate" required />
            </div>
            <button type="submit">Book</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
