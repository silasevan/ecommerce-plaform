const API_URL = 'http://localhost:3000';

export const getProducts = async () => {
  const res = await fetch(`${API_URL}/products`);
  return res.json();
};

export const addOrder = async (order) => {
  const res = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
  return res.json();
};
