const Sweet = require('../models/sweet');

function addSweetController(req, res) {
  const { name, category, price, quantity } = req.body;
  if (!name || !category || typeof price !== 'number' || typeof quantity !== 'number') {
    return res.status(400).json({ error: 'Invalid sweet data' });
  }
  const sweet = Sweet.addSweet({ name, category, price, quantity });
  res.status(201).json(sweet);
}

function getAllSweetsController(req, res) {
  let sweets = Sweet.getAllSweets();
  const { name, category, minPrice, maxPrice } = req.query;
  if (name) {
    sweets = sweets.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
  }
  if (category) {
    sweets = sweets.filter(s => s.category.toLowerCase() === category.toLowerCase());
  }
  if (minPrice) {
    sweets = sweets.filter(s => s.price >= parseFloat(minPrice));
  }
  if (maxPrice) {
    sweets = sweets.filter(s => s.price <= parseFloat(maxPrice));
  }
  res.status(200).json(sweets);
}

function deleteSweetController(req, res) {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' });
  }
  const deleted = Sweet.deleteSweet(id);
  if (deleted) {
    return res.status(204).send();
  } else {
    return res.status(404).json({ error: 'Sweet not found' });
  }
}

module.exports = {
  addSweetController,
  getAllSweetsController,
  deleteSweetController
};
