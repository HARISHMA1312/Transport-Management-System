import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [formErrors, setFormErrors] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation before submitting
    if (validateForm()) {
      // Form is valid, proceed with login logic
      console.log('Form submitted:', formData);
      // Redirect to the home page
      window.location.href = '/home';
    } else {
      // Form is invalid, display error messages
      console.log('Form validation failed');
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Validate email
    if (!formData.email) {
      errors.email = 'Email is required';
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      errors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
      isValid = false;
    } else if (!/(?=.*[0-9])/.test(formData.password)) {
      errors.password = 'Password must contain at least one number';
      isValid = false;
    } else if (!/(?=.*[!@#$%^&*])/.test(formData.password)) {
      errors.password = 'Password must contain at least one special character';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <div id="login-container">
      <div id="login-image">
        {/* Your login image */}
      </div>
      <div id="login-form-container">
        <h2>Login - Transport Management System</h2>
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {formErrors.password && <span className="error">{formErrors.password}</span>}
          </div>
          <button type="submit" className="btn">Login</button>
        </form>
        <p id="register-text">Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
}

export default LoginPage;
