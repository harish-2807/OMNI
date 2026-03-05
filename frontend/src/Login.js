import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Auto-fill username from localStorage on component mount
  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // TODO: Replace with your actual Vercel URL
      console.log('Login attempt:', { username, password });
      
      // Temporary success for testing UI
      if (username === 'admin' && password === 'admin') {
        localStorage.setItem('username', username);
        navigate('/welcome');
        return;
      }

      // const response = await axios.post('https://YOUR_VERCEL_URL_HERE/login', {
      //   username,
      //   password,
      // });

      // if (response.status === 200) {
      //   localStorage.setItem('username', username);
      //   navigate('/welcome');
      // }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError('Invalid credentials');
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-card">
          <div className="logo-section">
            <div className="logo">messimo</div>
          </div>
          
          <h1 className="login-title">Create account</h1>
          
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Email address"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-input"
              />
            </div>
            {error && <div className="error-message">{error}</div>}
            <button type="submit" className="login-button">
              Create account
            </button>
          </form>

          <div className="terms">
            <p>
              By creating an account, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>

          <div className="login-link">
            <p>
              Have an account? <a href="#" className="link">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
