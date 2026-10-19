import React, { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import SearchBar from '../components/SearchBar';
import CategoryFiller from '../components/CategoryFiller';
import Pagination from '../components/Pagination';

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('keyword') || '';
  const category = searchParams.get('category') || 'All Categories';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const itemsPerPage = 3;

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchKeyword = p.name.toLowerCase().includes(keyword.toLowerCase());
      const matchCategory = category === 'All Categories' || p.category === category;
      return matchKeyword && matchCategory;
    });
  }, [keyword, category]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentPage = page > totalPages && totalPages > 0 ? totalPages : page;

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const updateParams = (newParams) => {
    const params = new URLSearchParams(searchParams);
    Object.keys(newParams).forEach((key) => {
      if (newParams[key] && newParams[key] !== 'All Categories') {
        params.set(key, newParams[key]);
      } else {
        params.delete(key);
      }
    });
    setSearchParams(params);
  };

  return (
    <div>
      <h2>Product List Page</h2>
      <SearchBar keyword={keyword} onSearchChange={(val) => updateParams({ keyword: val, page: 1 })} />
      <CategoryFiller category={category} onCategoryChange={(val) => updateParams({ category: val, page: 1 })} />

      <p>Total Products: {filteredProducts.length}</p>

      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayedProducts.length > 0 ? (
            displayedProducts.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.price}</td>
                <td>
                  <Link to={`/products/${p.id}`}>View Details</Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">404-Không tìm thấy sản phẩm!</td>
            </tr>
          )}
        </tbody>
      </table>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(newPage) => updateParams({ page: newPage })} />
    </div>
  );
}

export default ProductList;