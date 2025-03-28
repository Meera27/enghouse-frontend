import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavbarComponment({ isLoggedIn, username, onLogout }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Enghouse
        </Link>
        <div className="navbar-auth">
          {isLoggedIn ? (
            <div className="user-info">
              <span className="welcome-message">Welcome, {username}</span>
              <button onClick={onLogout} className="auth-button logout">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/" className="auth-button login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponment;