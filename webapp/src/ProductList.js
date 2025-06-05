import React, { useEffect, useState } from 'react';
import { getProducts } from './api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h2>Available Products</h2>
      <ul>
        {products.map((p, i) => (
          <li key={i}>{p.name} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
