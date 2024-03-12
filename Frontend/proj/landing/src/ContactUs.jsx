// ContactUs.js
import './Contact.css';
import React, {useRef, useState } from 'react';
import Nav from './Navbar1.jsx';
import Footer from './Footer.jsx';
import emailjs from '@emailjs/browser';
const ContactUs = () => {
  const form=useRef();
  const [successMessage, setSuccessMessage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_x1vi2v7', 'template_hutrqnt', form.current, {
        publicKey: 'bW2UtZr80xOQyZFgJ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessMessage('Your message has been sent successfully! We will get back to you soon.');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSuccessMessage('Failed. Please try again later.');
        },
      );
      e.target.reset()
  };

  return (
    <>
    <Nav/>
    <div className="contact-us">
      <header>
        <h2>Contact Us</h2>
      </header>

      <div className="container">
        <section className="contact-form">
          <p>Have questions or need assistance? Send us a message!</p>

          {successMessage && <div className="success-message">{successMessage}</div>}

          <form ref={form} onSubmit={handleSubmit}>
            <label>
              Name:
              <br /><input type="text" name='name' required />
            </label>

            <label>
              Email:
              <br /><input type="email" name='email' required />
            </label>

            <label>
              Phone:
              <br /><input type="tel" name='phone' required />
            </label>

            <label>
              Message:
              <br /><textarea name='message' required />
            </label>

            <button type="submit">Submit</button>
          </form>
        </section>
      </div>

      <footer>
        <div className="contact-numbers">
          <p>
            <strong>English:</strong> +1 (555) 123-4567
          </p>
          <p>
            <strong>Tamil:</strong> +91 12345 67890
          </p>
          <p>
            <strong>French:</strong> +33 1 23 45 67 89
          </p>
          <p>
            <strong>Hindi:</strong> +91 98765 43210
          </p>
          <p>
            <strong>Telugu:</strong> +91 87654 32109
          </p>
          <p>
            <strong>Marathi:</strong> +91 76543 21098
          </p>
          <p>
            <strong>Español:</strong> +1 (555) 987-6543
          </p>
        </div>
        <p>&copy; 2024 Chill Your Will</p>
      </footer>
    </div>
    <Footer></Footer>
    </>
  );
};

export default ContactUs;