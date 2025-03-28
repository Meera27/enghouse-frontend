import React, { useState } from 'react';
import './Login.css';

function LoginComponent({ onLogin }) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError('Username cannot be empty');
      return;
    }

    const success = onLogin(username);
    if (!success) {
      setError('Invalid username. Please use "enghouse" or "meera99"');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Enghouse</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="form-input"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="login-help">
          <p>Valid usernames: "enghouse" or "meera99"</p>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;