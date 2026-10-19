import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={{ padding: '10px 0' }}>
      ProductStore | <Link to="/">Home</Link> | <Link to="/products">Products</Link>
    </div>
  );
}

export default Header;