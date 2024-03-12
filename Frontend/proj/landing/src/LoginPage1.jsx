import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginStyles1.css'; 
import logo from './Images1/logo1.png';
import Nav from './Navbar1';
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
      <Nav/>
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
            <span className="login-label">Username/E-mail</span>
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
            <Link to="/sign1">Create an account</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default LoginPage1;
