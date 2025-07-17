// models/sweet.js
// In-memory model for storing and managing sweets

let sweets = [];
let nextId = 1;

/**
 * Add a new sweet to the in-memory store.
 * @param {Object} param0 - Sweet details
 * @returns {Object} The created sweet object
 */
function addSweet({ name, category, price, quantity }) {
  const sweet = {
    id: nextId++,
    name,
    category,
    price,
    quantity
  };
  sweets.push(sweet);
  return sweet;
}

/**
 * Get all sweets from the store.
 * @returns {Array} List of all sweets
 */
function getAllSweets() {
  return sweets;
}

/**
 * Delete a sweet by its ID.
 * @param {number} id - Sweet ID
 * @returns {boolean} True if deleted, false if not found
 */
function deleteSweet(id) {
  const index = sweets.findIndex(s => s.id === id);
  if (index !== -1) {
    sweets.splice(index, 1);
    return true;
  }
  return false;
}

/**
 * Purchase a quantity of a sweet, decreasing its stock.
 * @param {number} id - Sweet ID
 * @param {number} qty - Quantity to purchase
 * @returns {Object} Result with sweet or error
 */
function purchaseSweet(id, qty) {
  const sweet = sweets.find(s => s.id === id);
  if (!sweet) return { error: 'Sweet not found' };
  if (sweet.quantity < qty) return { error: 'Not enough stock' };
  sweet.quantity -= qty;
  return { sweet };
}

/**
 * Restock a sweet, increasing its quantity.
 * @param {number} id - Sweet ID
 * @param {number} qty - Quantity to add
 * @returns {Object} Result with sweet or error
 */
function restockSweet(id, qty) {
  const sweet = sweets.find(s => s.id === id);
  if (!sweet) return { error: 'Sweet not found' };
  sweet.quantity += qty;
  return { sweet };
}

/**
 * Reset the in-memory store (for testing).
 */
function _reset() {
  sweets = [];
  nextId = 1;
}

module.exports = {
  addSweet,
  getAllSweets,
  deleteSweet,
  purchaseSweet,
  restockSweet,
  _reset
};
