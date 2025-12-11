import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Welcome to the React Portal</h1>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default App;
