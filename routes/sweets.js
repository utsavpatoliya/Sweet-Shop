const express = require('express');
const { addSweetController } = require('../controllers/sweetsController');

const router = express.Router();

router.post('/', addSweetController);

module.exports = router;
