const express = require('express');
const accountController = require('../controllers/accountController');

const router = express.Router();

// Create a new account
router.post('/accounts', accountController.createAccount);

// Get all accounts for a specific customer
router.get('/customers/:customer_id/accounts', accountController.getAllAccountsByCustomerId);

// Get account by ID
router.get('/accounts/:id', accountController.getAccountById);

// Update account balance by ID
router.put('/accounts/:id', accountController.updateAccountBalanceById);

// Delete account by ID
router.delete('/accounts/:id', accountController.deleteAccountById);

module.exports = router;