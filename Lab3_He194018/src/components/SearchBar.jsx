import React from 'react';

function SearchBar({ keyword, onSearchChange }) {
  return (
    <div>
      Search Product: <input type="text" value={keyword} onChange={(e) => onSearchChange(e.target.value)} />
    </div>
  );
}

export default SearchBar;