const express = require('express');
const { addSweetController, getAllSweetsController, deleteSweetController } = require('../controllers/sweetsController');

const router = express.Router();

router.post('/', addSweetController);
router.get('/', getAllSweetsController);
router.delete('/:id', deleteSweetController);

module.exports = router;
