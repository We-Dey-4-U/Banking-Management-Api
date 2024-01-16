const express = require('express');
const transactionController = require('../controllers/transactionController');

const router = express.Router();

// Create a new transaction
router.post('/transactions', transactionController.createTransaction);

// Get all transactions for a specific account
router.get('/accounts/:account_id/transactions', transactionController.getAllTransactionsByAccountId);

module.exports = router;