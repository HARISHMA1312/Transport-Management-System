import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserList from '../components/UserList'; // Importing the UserList component

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
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

    // Check if all fields are filled out
    if (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.password &&
      formData.confirmPassword
    ) {
      // Form is valid, proceed with form submission logic
      console.log('Form submitted:', formData);
      // Redirect to the next link or perform any other action
    } else {
      // Form is invalid, display error message or prevent submission
      console.log('Please fill out all fields.');
    }
  };

  // Dummy user data for testing UserList component
  const users = [
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  ];

  // Conditionally render the link based on form validation
  const renderLink = () => {
    if (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.password &&
      formData.confirmPassword
    ) {
      return (
        <Link to="/home">
          <button type="submit" className="btn">Login</button>
        </Link>
      );
    } else {
      return (
        <button type="submit" className="btn" disabled>Login</button>
      );
    }
  };

  return (
    <div id="register-container">
      <h2>Register Here</h2>
      <form id="register-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="text" id="phone" name="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="password">Create Password</label>
          <input type="password" id="password" name="password" placeholder="Create password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" name="confirmPassword" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} />
        </div>
        <div className="btn-container">
          <button type="submit" className="btn">Submit</button>
          <button type="reset" className="btn reset-btn">Reset</button>
        </div>
        {renderLink()}
      </form>

      {/* Display UserList component */}
      <UserList users={users} />
    </div>
  );
}

export default Register;
