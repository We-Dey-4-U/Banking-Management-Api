const express = require('express');
const loanPaymentController = require('../controllers/loanPaymentController');

const router = express.Router();

// Create a new loan payment
router.post('/loan-payments', loanPaymentController.createLoanPayment);

// Get all loan payments for a specific loan
router.get('/loans/:loan_id/payments', loanPaymentController.getAllLoanPaymentsByLoanId);

// Get loan payment by ID
router.get('/loan-payments/:id', loanPaymentController.getLoanPaymentById);

// Delete loan payment by ID
router.delete('/loan-payments/:id', loanPaymentController.deleteLoanPaymentById);

module.exports = router;