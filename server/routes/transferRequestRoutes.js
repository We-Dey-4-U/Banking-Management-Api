const express = require('express');
const transferRequestController = require('../controllers/transferRequestController');

const router = express.Router();

// Create a new transfer request
router.post('/transfer-requests', transferRequestController.createTransferRequest);

// Get all transfer requests for a specific account
router.get('/accounts/:account_id/transfer-requests', transferRequestController.getAllTransferRequestsByAccountId);

// Get transfer request by ID
router.get('/transfer-requests/:id', transferRequestController.getTransferRequestById);

// Update transfer request status by ID
router.put('/transfer-requests/:id/status', transferRequestController.updateTransferRequestStatusById);

// Delete transfer request by ID
router.delete('/transfer-requests/:id', transferRequestController.deleteTransferRequestById);

module.exports = router;