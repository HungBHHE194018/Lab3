import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return (
      <div>
        <h2>404 - Không tìm thấy sản phẩm</h2>
        <p>Product ID {id} does not exist.</p>
        <Link to="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/products">Back to Products</Link>
      <h2>{product.name}</h2>
      <p>ID: {product.id}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default ProductDetail;