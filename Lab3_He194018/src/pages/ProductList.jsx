<table border="1" cellPadding="7" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', borderColor: '#d5dbdb' }}>
  <thead>
    <tr style={{ backgroundColor: '#ebf5fb', color: '#1a5276', textAlign: 'left' }}>
      <th>STT</th>
      <th>Tên sản phẩm</th>
      <th>Danh mục</th>
      <th>Giá (VNĐ)</th>
      <th>Hành động</th>
    </tr>
  </thead>
  <tbody>
    {currentProducts.length === 0 ? (
      <tr>
        <td colSpan="5" style={{ textAlign: 'center' }}>Không tìm thấy sản phẩm nào</td>
      </tr>
    ) : (
      currentProducts.map(p => <ProductItem key={p.id} product={p} />)
    )}
  </tbody>
</table>