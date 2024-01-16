const express = require('express');
const withdrawalRequestController = require('../controllers/withdrawalRequestController');

const router = express.Router();

// Create a new withdrawal request
router.post('/withdrawal-requests', withdrawalRequestController.createWithdrawalRequest);

// Get all withdrawal requests for a specific account
router.get('/accounts/:account_id/withdrawal-requests', withdrawalRequestController.getAllWithdrawalRequestsByAccountId);

// Get withdrawal request by ID
router.get('/withdrawal-requests/:id', withdrawalRequestController.getWithdrawalRequestById);

// Update withdrawal request status by ID
router.put('/withdrawal-requests/:id/status', withdrawalRequestController.updateWithdrawalRequestStatusById);

// Delete withdrawal request by ID
router.delete('/withdrawal-requests/:id', withdrawalRequestController.deleteWithdrawalRequestById);

module.exports = router;