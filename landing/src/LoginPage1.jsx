import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginStyles1.css'; 
import logo from './Images1/logo1.png';

function LoginPage1() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === '' || password === '') {
      setError('Enter all the fields mentioned');
    } else {
      console.log('Username:', username);
      console.log('Password:', password);
    }
  };

  return (
    <>
    <div>
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
            <li><Link to="/login1" className="home-nav-link1">Login</Link></li>
            <li><Link to="/sign1" className="home-nav-link">Signup</Link></li>
          </ul>
        </div>
      </nav>
      <div className="login-box">
        <form onSubmit={handleLogin} className="login-form">
          <h2 className="login-heading">Login Page</h2>
          <div className="login-inputBox">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
              required
            />
            <span className="login-label">Username</span>
            <i></i>
          </div>
          <div className="login-inputBox">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              required
            />
            <span className="login-label">Password</span>
            <i></i>
          </div>
          <Link to="/" className='login-submitButton' onClick={handleLogin}>Login</Link>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="login-links">
            <a href="#">Forgot Password?</a>
            <Link to="/sign">Create an account</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default LoginPage1;
