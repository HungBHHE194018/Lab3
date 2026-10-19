import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h2>404 - Không tìm thấy trang</h2>
      <p>Trang bạn đang tìm kiếm không tồn tại.</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;