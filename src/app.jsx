import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{ margin: '50px' }}>
      <h1>Welcome to React Portal</h1>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default App;
