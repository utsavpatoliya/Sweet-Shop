const Sweet = require('../models/sweet');

function addSweetController(req, res) {
  const { name, category, price, quantity } = req.body;
  if (!name || !category || typeof price !== 'number' || typeof quantity !== 'number') {
    return res.status(400).json({ error: 'Invalid sweet data' });
  }
  const sweet = Sweet.addSweet({ name, category, price, quantity });
  res.status(201).json(sweet);
}

module.exports = {
  addSweetController
};
