let sweets = [];
let nextId = 1;

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

function getAllSweets() {
  return sweets;
}

module.exports = {
  addSweet,
  getAllSweets,
  _reset: () => { sweets = []; nextId = 1; } // for testing
};
