const express = require('express');
const depositRequestController = require('../controllers/depositRequestController');

const router = express.Router();

// Create a new deposit request
router.post('/deposit-requests', depositRequestController.createDepositRequest);

// Get all deposit requests for a specific account
router.get('/accounts/:account_id/deposit-requests', depositRequestController.getAllDepositRequestsByAccountId);

// Get deposit request by ID
router.get('/deposit-requests/:id', depositRequestController.getDepositRequestById);

// Update deposit request status by ID
router.put('/deposit-requests/:id/status', depositRequestController.updateDepositRequestStatusById);

// Delete deposit request by ID
router.delete('/deposit-requests/:id', depositRequestController.deleteDepositRequestById);

module.exports = router;