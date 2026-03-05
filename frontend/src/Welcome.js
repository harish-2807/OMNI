import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const savedUsername = localStorage.getItem('username');
    if (!savedUsername) {
      // If no username found, redirect to login
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="welcome-container">
      <div className="header">
        <div className="logo">MockBird</div>
        <nav className="navbar">
          <button type="button" className="nav-item" onClick={() => console.log('Navigate to home')}>HOME</button>
        </nav>
        <div className="hamburger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className="welcome-content">
        <h1>Welcome</h1>
        <h2>To Our Company</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          has been the industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <button className="learn-more-button">LEARN MORE</button>
      </div>
    </div>
  );
};

export default Welcome;
