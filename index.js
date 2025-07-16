// index.js
// Main entry point for the Sweet Shop backend API

const express = require('express');
const sweetsRouter = require('./routes/sweets');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());
// Mount sweets API routes
app.use('/api/sweets', sweetsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 