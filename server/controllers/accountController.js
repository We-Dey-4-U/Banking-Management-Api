const accountModel = require('../models/accountModel');

// Create a new account
const createAccount = (req, res) => {
  const accountData = req.body;

  accountModel.createAccount(accountData, (err, result) => {
    if (err) {
      console.error('Error creating account:', err);
      res.status(500).json({ error: 'Error creating account' });
    } else {
      res.status(201).json({ message: 'Account created successfully', account: result });
    }
  });
};

// Get all accounts for a specific customer
const getAllAccountsByCustomerId = (req, res) => {
  const customerId = req.params.customer_id;

  accountModel.getAllAccountsByCustomerId(customerId, (err, result) => {
    if (err) {
      console.error('Error getting accounts:', err);
      res.status(500).json({ error: 'Error getting accounts' });
    } else {
      res.json(result);
    }
  });
};

// Get account by ID
const getAccountById = (req, res) => {
  const accountId = req.params.id;

  accountModel.getAccountById(accountId, (err, result) => {
    if (err) {
      console.error('Error getting account:', err);
      res.status(500).json({ error: 'Error getting account' });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: 'Account not found' });
      } else {
        res.json(result[0]);
      }
    }
  });
};

// Update account balance by ID
const updateAccountBalanceById = (req, res) => {
  const accountId = req.params.id;
  const newBalance = req.body.balance;

  accountModel.updateAccountBalanceById(accountId, newBalance, (err, result) => {
    if (err) {
      console.error('Error updating account balance:', err);
      res.status(500).json({ error: 'Error updating account balance' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Account not found' });
      } else {
        res.json({ message: 'Account balance updated successfully' });
      }
    }
  });
};

// Delete account by ID
const deleteAccountById = (req, res) => {
  const accountId = req.params.id;

  accountModel.deleteAccountById(accountId, (err, result) => {
    if (err) {
      console.error('Error deleting account:', err);
      res.status(500).json({ error: 'Error deleting account' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Account not found' });
      } else {
        res.json({ message: 'Account deleted successfully' });
      }
    }
  });
};

module.exports = {
  createAccount,
  getAllAccountsByCustomerId,
  getAccountById,
  updateAccountBalanceById,
  deleteAccountById,
};