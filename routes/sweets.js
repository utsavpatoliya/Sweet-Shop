const express = require('express');
const { addSweetController, getAllSweetsController } = require('../controllers/sweetsController');

const router = express.Router();

router.post('/', addSweetController);
router.get('/', getAllSweetsController);

module.exports = router;
