
import React, { useState } from 'react';
import './index.css';

function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    gender: '',
    dob: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with API call
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <div className="login-box p-4 rounded shadow">
        <h2 className="text-center mb-4 login-title">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="Male"
                  onChange={handleChange}
                  required
                />
                <label className="form-check-label" htmlFor="male">Male</label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="Female"
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="female">Female</label>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 custom-btn">Register</button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
