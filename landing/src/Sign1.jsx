import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Images1/logo1.png';
import './signStyles1.css';

function Sign1() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (username === '' || password === '' || confirmPassword === '') {
      setError('Enter all the fields mentioned');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
    }
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
          <li><Link to='/home' className="home-nav-link">Home</Link></li> 
            <li><Link to="/ChillPlacesPage" className="home-nav-link">Packages</Link></li> 
            <li><Link to="/" className="home-nav-link">Honeymoon</Link></li>
            <li><Link to="/" className="home-nav-link">Contact</Link></li>
            <li><Link to="/login1" className="home-nav-link">Login</Link></li>
            <li><Link to="/sign1" className="home-nav-link1">Signup</Link></li>
          </ul>
        </div>
      </nav>
    <div className="box">
      <form onSubmit={handleSignUp} className="form">
        <h2 className="heading">Sign Up</h2>
        <div className="inputBox">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder=""
            required
          />
          <span className="label">Username</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder=""
            required
          />
          <span className="label">Password</span>
          <i></i>
        </div>
        <div className="inputBox">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="input"
            placeholder=""
            required
          />
          <span className="label">Confirm Password</span>
          <i></i>
        </div>
        <Link to="/login" className="submitButton">Sign Up</Link>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="links">
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
    </>
  );
}

export default Sign1;
