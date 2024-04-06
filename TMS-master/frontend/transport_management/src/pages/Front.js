import React from 'react';
import { Link } from 'react-router-dom';



function LoginPage() {
  return (
    <div id="login-container">
      <div id="login-image">
        {/* Your login image */}
      </div>
      <div id="login-form-container">
        <h2>Login - Transport Management System</h2>
        <form id="login-form">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          {/* Add a Link to the SaveUser page */}
          <Link to="/Save">
            <button type="submit" className="btn">Login</button>
          </Link>
        </form>
        <p id="register-text">Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
}

export default LoginPage;
