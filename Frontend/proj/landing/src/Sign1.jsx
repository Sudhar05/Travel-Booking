import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signStyles1.css';
import Nav from './Navbar1';
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
    <Nav/>
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
          <span className="label">E-mail</span>
          <i></i>
        </div>
        <Link to="/login" className="submitButton">Sign Up</Link>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="links">
          <Link to="/login1">Login</Link>
        </div>
      </form>
    </div>
    </>
  );
}

export default Sign1;
