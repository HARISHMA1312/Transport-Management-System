import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted');
  };

  return (
    <div id="register-container">
      <h2>Register Here</h2>
      <form id="register-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" placeholder="Enter your phone number" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Create Password</label>
          <input type="password" id="password" placeholder="Create password" />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Confirm password" />
        </div>
        <div className="btn-container">
          <button type="submit" className="btn">Submit</button>
          <button type="reset" className="btn reset-btn">Reset</button>
        </div>
        <Link to="/save">
            <button type="submit" className="btn">Login</button>
          </Link>
      </form>
    </div>
  );
}

export default Register;
