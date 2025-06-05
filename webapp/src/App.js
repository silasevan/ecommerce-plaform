import React, { useState } from 'react';
import ProductList from './ProductList';
import LoginForm from './LoginForm';
import OrderForm from './OrderForm';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>E-Commerce App</h1>
      {user ? (
        <>
          <p>Welcome, {user}</p>
          <ProductList />
          <OrderForm user={user} />
        </>
      ) : (
        <LoginForm onLogin={setUser} />
      )}
    </div>
  );
};

export default App;
