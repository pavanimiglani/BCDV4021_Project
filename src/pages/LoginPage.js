// LoginPage.js
import React, { useState } from 'react';
import './CSS/LoginPage.css'; // Import the CSS file for styling

export default function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // You can add your authentication logic here. For simplicity, let's assume "admin" is the correct username and "password" is the correct password.
      if (username === 'admin' && password === 'password') {
        onLogin();
      } else {
        alert('Invalid username or password. Please try again.');
      }
    };
  
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button id="login" onClick={handleLogin}>Login</button>
        </form>
      </div>
    );
  }