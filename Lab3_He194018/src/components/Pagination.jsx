import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div>
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>Previous</button>
      <span> Page {currentPage} / {totalPages || 1} </span>
      <button disabled={currentPage === totalPages || totalPages === 0} onClick={() => onPageChange(currentPage + 1)}>Next</button>
    </div>
  );
}

export default Pagination;