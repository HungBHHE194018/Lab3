import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.category}</td>
      <td>{product.price.toLocaleString()} VNĐ</td>
      <td>
        <Link to={`/products/${product.id}`}>
          <button style={{ cursor: 'pointer' }}>View Details</button>
        </Link>
      </td>
    </tr>
  );
}

export default ProductItem;