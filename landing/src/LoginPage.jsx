import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import axios from 'axios';
import './LoginStyles.css'; 

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, { username, password });
      localStorage.setItem("token", res.data);
      //history.push("/");
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div>
        <div className="unique-login-box">
          <form onSubmit={handleSubmit} className="unique-login-form">
            <h2 className="unique-login-heading">Login Page</h2>
            <div className="unique-login-inputBox">
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
                className="unique-login-input"
                required
              />
              <span className="unique-login-label">Username</span>
              <i></i>
            </div>
            <div className="unique-login-inputBox">
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                className="unique-login-input"
                required
              />
              <span className="unique-login-label">Password</span>
              <i></i>
            </div>
            <div className='link-log'>
              <button type="submit" className="unique-login-submitButton">Login</button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <div className="unique-login-links">
                <a href="#">Forgot Password?</a>
                <Link to="/signup">Create an account</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
