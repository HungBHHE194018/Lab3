import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to ProductStore</h1>
      <p>Manage and explore products for your needs</p>
      <Link to="/products">View Products</Link>
    </div>
  );
}

export default Home;