// controllers/sweetsController.js
// Handles HTTP request logic for sweets endpoints

const Sweet = require('../models/sweet');

/**
 * Add a new sweet (POST /api/sweets)
 */
function addSweetController(req, res) {
  const { name, category, price, quantity } = req.body;
  if (!name || !category || typeof price !== 'number' || typeof quantity !== 'number') {
    return res.status(400).json({ error: 'Invalid sweet data' });
  }
  const sweet = Sweet.addSweet({ name, category, price, quantity });
  res.status(201).json(sweet);
}

/**
 * Get all sweets, with optional search/filter (GET /api/sweets)
 */
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

/**
 * Delete a sweet by ID (DELETE /api/sweets/:id)
 */
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

/**
 * Purchase a sweet (decrease quantity) (POST /api/sweets/:id/purchase)
 */
function purchaseSweetController(req, res) {
  const id = parseInt(req.params.id, 10);
  const qty = req.body.quantity;
  if (isNaN(id) || typeof qty !== 'number' || qty <= 0) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const result = Sweet.purchaseSweet(id, qty);
  if (result.error === 'Sweet not found') {
    return res.status(404).json({ error: result.error });
  }
  if (result.error === 'Not enough stock') {
    return res.status(400).json({ error: result.error });
  }
  res.status(200).json(result.sweet);
}

/**
 * Restock a sweet (increase quantity) (POST /api/sweets/:id/restock)
 */
function restockSweetController(req, res) {
  const id = parseInt(req.params.id, 10);
  const qty = req.body.quantity;
  if (isNaN(id) || typeof qty !== 'number' || qty <= 0) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const result = Sweet.restockSweet(id, qty);
  if (result.error === 'Sweet not found') {
    return res.status(404).json({ error: result.error });
  }
  res.status(200).json(result.sweet);
}

module.exports = {
  addSweetController,
  getAllSweetsController,
  deleteSweetController,
  purchaseSweetController,
  restockSweetController
};
