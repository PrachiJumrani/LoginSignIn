// src/Login.js
import React from 'react';
import './index.css';

function Login() {
  return (
    <div className="login-page d-flex align-items-center justify-content-center">
      <div className="login-box p-4 rounded shadow">
        <h2 className="text-center mb-4 login-title">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" placeholder="Enter username" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary w-100 custom-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
