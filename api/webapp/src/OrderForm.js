import React, { useState } from 'react';
import { addOrder } from './api';

const OrderForm = ({ user }) => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleOrder = async (e) => {
    e.preventDefault();
    await addOrder({ user, product, quantity });
    alert('Order placed!');
  };

  return (
    <form onSubmit={handleOrder}>
      <h2>Place Order</h2>
      <input
        placeholder="Product name"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        min="1"
        required
      />
      <button type="submit">Order</button>
    </form>
  );
};

export default OrderForm;
