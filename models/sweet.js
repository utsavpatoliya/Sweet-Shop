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

function deleteSweet(id) {
  const index = sweets.findIndex(s => s.id === id);
  if (index !== -1) {
    sweets.splice(index, 1);
    return true;
  }
  return false;
}

module.exports = {
  addSweet,
  getAllSweets,
  deleteSweet,
  _reset: () => { sweets = []; nextId = 1; } // for testing
};
