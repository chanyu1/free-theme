import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Landing;
