// LoginPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './LoginPage.scss';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Replace this hardcoded password check with your secure authentication method
    if (password === 'sudhir') {
      // For demo purposes, the password 'sudhir' grants access
      localStorage.setItem('token', 'yourGeneratedTokenHere');
      alert('Login Successful');
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  const backgroundImageUrl = 'https://www.bargainhouse.co.za/wp-content/uploads/2020/12/37682282-electrical-component-kit-to-use-in-electrical-installations-1024x680.jpg'; // Replace with the actual image URL

  return (
    <div className='log' style={{
      backgroundImage: `url(${backgroundImageUrl})`, // Set the online image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="login-container">
        <div className="login-content">
          <div className="login-form">
            <h2>Sign In</h2>
            <p>“Relax we've got this!”</p>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="text"
                  id="input1"
                  name="input1"
                  required
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="input2"
                  name="input2"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit">Login</button>
              <br/><br/>
              Don't have an account?
              <Link to='/SignupPage' style={{color:"#007FFF", textDecoration:"none", fontSize: "15px"}}>
                Create a new account
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
