const transactionModel = require('../models/transactionModel');

// Create a new transaction
const createTransaction = (req, res) => {
  const transactionData = req.body;

  transactionModel.createTransaction(transactionData, (err, result) => {
    if (err) {
      console.error('Error creating transaction:', err);
      res.status(500).json({ error: 'Error creating transaction' });
    } else {
      res.status(201).json({ message: 'Transaction created successfully', transaction: result });
    }
  });
};

// Get all transactions for a specific account
const getAllTransactionsByAccountId = (req, res) => {
  const accountId = req.params.account_id;

  transactionModel.getAllTransactionsByAccountId(accountId, (err, result) => {
    if (err) {
      console.error('Error getting transactions:', err);
      res.status(500).json({ error: 'Error getting transactions' });
    } else {
      res.json(result);
    }
  });
};

module.exports = {
  createTransaction,
  getAllTransactionsByAccountId,
};