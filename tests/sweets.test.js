const request = require('supertest');
const express = require('express');
const sweetsRouter = require('../routes/sweets');

const app = express();
app.use(express.json());
app.use('/api/sweets', sweetsRouter);

describe('Sweets API', () => {
  describe('POST /api/sweets', () => {
    it('should add a new sweet and return it', async () => {
      const newSweet = {
        name: 'Chocolate Bar',
        category: 'chocolate',
        price: 2.5,
        quantity: 10
      };
      const res = await request(app)
        .post('/api/sweets')
        .send(newSweet)
        .expect(201);
      expect(res.body).toMatchObject(newSweet);
      expect(res.body).toHaveProperty('id');
    });
  });
});

describe('GET /api/sweets', () => {
  beforeEach(() => {
    // Reset the in-memory store before each test
    const Sweet = require('../models/sweet');
    Sweet._reset();
  });
  it('should return all sweets', async () => {
    const sweet1 = { name: 'Lollipop', category: 'candy', price: 1.0, quantity: 20 };
    const sweet2 = { name: 'Cupcake', category: 'pastry', price: 3.0, quantity: 5 };
    await request(app).post('/api/sweets').send(sweet1);
    await request(app).post('/api/sweets').send(sweet2);
    const res = await request(app).get('/api/sweets').expect(200);
    expect(res.body.length).toBe(2);
    expect(res.body[0]).toHaveProperty('id');
    expect(res.body[1]).toHaveProperty('id');
    expect(res.body.map(s => s.name)).toEqual(expect.arrayContaining(['Lollipop', 'Cupcake']));
  });
});

describe('DELETE /api/sweets/:id', () => {
  beforeEach(() => {
    // Reset the in-memory store before each test
    const Sweet = require('../models/sweet');
    Sweet._reset();
  });
  it('should delete a sweet by id', async () => {
    const sweet = { name: 'Candy Cane', category: 'candy', price: 1.5, quantity: 15 };
    const addRes = await request(app).post('/api/sweets').send(sweet);
    const sweetId = addRes.body.id;
    await request(app).delete(`/api/sweets/${sweetId}`).expect(204);
    const getRes = await request(app).get('/api/sweets').expect(200);
    expect(getRes.body.find(s => s.id === sweetId)).toBeUndefined();
  });
});

describe('GET /api/sweets (search & filter)', () => {
  beforeEach(() => {
    const Sweet = require('../models/sweet');
    Sweet._reset();
  });
  it('should search sweets by name', async () => {
    await request(app).post('/api/sweets').send({ name: 'Choco Pie', category: 'chocolate', price: 5, quantity: 10 });
    await request(app).post('/api/sweets').send({ name: 'Candy Corn', category: 'candy', price: 2, quantity: 20 });
    const res = await request(app).get('/api/sweets?name=Choco').expect(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].name).toBe('Choco Pie');
  });
  it('should filter sweets by category', async () => {
    await request(app).post('/api/sweets').send({ name: 'Brownie', category: 'pastry', price: 4, quantity: 5 });
    await request(app).post('/api/sweets').send({ name: 'Candy Cane', category: 'candy', price: 1, quantity: 15 });
    const res = await request(app).get('/api/sweets?category=pastry').expect(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].category).toBe('pastry');
  });
  it('should filter sweets by price range', async () => {
    await request(app).post('/api/sweets').send({ name: 'Macaron', category: 'pastry', price: 3, quantity: 8 });
    await request(app).post('/api/sweets').send({ name: 'Truffle', category: 'chocolate', price: 7, quantity: 3 });
    const res = await request(app).get('/api/sweets?minPrice=2&maxPrice=5').expect(200);
    expect(res.body.length).toBe(1);
    expect(res.body[0].name).toBe('Macaron');
  });
});
