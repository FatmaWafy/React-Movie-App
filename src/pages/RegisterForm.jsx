/* eslint-disable */
import React, { useState } from "react";

const RegisterForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleValidation = () => {
    const newErrors = {};

    // Email Validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Name Validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name must contain only letters and spaces.";
    }

    // Username Validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required.";
    } else if (!/^[A-Za-z0-9]+$/.test(formData.username)) {
      newErrors.username = "Username must contain only letters and numbers.";
    }

    // Password Validation
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (!validatePassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters, contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    }

    // Confirm Password
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm Password is required.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      onLogin();
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className='container  '
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "80%",
          height: "90%",
          border: "2px solid #ffd700",
          padding: "30px",
          background: "white",
          borderRadius: "30px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email Address
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='form-control'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <small className='text-danger'>{errors.email}</small>
          )}
        </div>

        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            className='form-control'
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small className='text-danger'>{errors.name}</small>}
        </div>

        <div className='mb-3'>
          <label htmlFor='username' className='form-label'>
            Username
          </label>
          <input
            type='text'
            id='username'
            name='username'
            className='form-control'
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && (
            <small className='text-danger'>{errors.username}</small>
          )}
        </div>

        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className='form-control'
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <small className='text-danger'>{errors.password}</small>
          )}
        </div>

        <div className='mb-3'>
          <label htmlFor='confirmPassword' className='form-label'>
            Confirm Password
          </label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            className='form-control'
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <small className='text-danger'>{errors.confirmPassword}</small>
          )}
        </div>

        <button type='submit' className='btn search'>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
