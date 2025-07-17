// routes/sweets.js
// Defines API routes for sweets operations

const express = require('express');
const { addSweetController, getAllSweetsController, deleteSweetController, purchaseSweetController, restockSweetController } = require('../controllers/sweetsController');

const router = express.Router(); // Express router for sweets

// Add a new sweet
router.post('/', addSweetController);
// Get all sweets (with optional search/filter)
router.get('/', getAllSweetsController);
// Delete a sweet by ID
router.delete('/:id', deleteSweetController);
// Purchase a sweet (decrease quantity)
router.post('/:id/purchase', purchaseSweetController);
// Restock a sweet (increase quantity)
router.post('/:id/restock', restockSweetController);

module.exports = router;
