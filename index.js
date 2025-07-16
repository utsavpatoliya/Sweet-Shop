const express = require('express');
const sweetsRouter = require('./routes/sweets');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/sweets', sweetsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 