const express = require('express');
const loanController = require('../controllers/loanController');

const router = express.Router();

// Create a new loan
router.post('/loans', loanController.createLoan);

// Get all loans for a specific account
router.get('/accounts/:account_id/loans', loanController.getAllLoansByAccountId);

// Get loan by ID
router.get('/loans/:id', loanController.getLoanById);

// Update loan status by ID
router.put('/loans/:id/status', loanController.updateLoanStatusById);

// Delete loan by ID
router.delete('/loans/:id', loanController.deleteLoanById);

module.exports = router;