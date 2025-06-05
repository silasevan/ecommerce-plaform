const request = require('supertest');
const app = require('../app');

describe('Products API', () => {
  beforeEach(async () => {
    await request(app).delete('/products'); // clear products
  });

  it('should return empty list initially', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });

  it('should add a product', async () => {
    const newProduct = { name: 'Laptop', price: 1200 };
    const res = await request(app).post('/products').send(newProduct);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toMatchObject(newProduct);
  });

  it('should clear all products', async () => {
    await request(app).post('/products').send({ name: 'Phone', price: 500 });
    const res = await request(app).delete('/products');
    expect(res.statusCode).toEqual(204);
  });
});
