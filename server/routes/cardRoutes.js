const express = require('express');
const cardController = require('../controllers/cardController');

const router = express.Router();

// Create a new card
router.post('/cards', cardController.createCard);

// Get all cards for a specific account
router.get('/accounts/:account_id/cards', cardController.getAllCardsByAccountId);

// Get card by ID
router.get('/cards/:id', cardController.getCardById);

// Delete card by ID
router.delete('/cards/:id', cardController.deleteCardById);

module.exports = router;