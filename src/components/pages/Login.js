// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//useNavigate

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const navigate = useNavigate();
 const handleClick = {}
  

  return (
    <div>
      <h2>Welcome Back to VSMS</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleClick}>
          Login
        </button>
      </form>
      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  );
//   const handleClick = () => { 


//     if (username === 'user' && password === 'password') {
//       navigate('./Home.js'); 
//     } else {
//       alert('Login failed. Please check your credentials.');
//     }
//   };
}

export default Login;
