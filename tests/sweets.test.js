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
