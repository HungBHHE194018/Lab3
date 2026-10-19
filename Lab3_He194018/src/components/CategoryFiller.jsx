import React from 'react';

function CategoryFiller({ category, onCategoryChange }) {
  return (
    <div>
      Category: 
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All Categories">All Categories</option>
        <option value="Điện thoại">Điện thoại</option>
        <option value="Laptop">Laptop</option>
        <option value="Máy tính bảng">Máy tính bảng</option>
        <option value="Phụ kiện">Phụ kiện</option>
      </select>
    </div>
  );
}

export default CategoryFiller;