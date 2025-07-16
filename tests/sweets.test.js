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
