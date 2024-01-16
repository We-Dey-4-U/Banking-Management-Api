const express = require('express');
const messageLogController = require('../controllers/messageLogController');

const router = express.Router();

// Create a new message log
router.post('/message-logs', messageLogController.createMessageLog);

// Get all message logs for a specific customer
router.get('/customers/:customer_id/message-logs', messageLogController.getAllMessageLogsByCustomerId);

// Get message log by ID
router.get('/message-logs/:id', messageLogController.getMessageLogById);

// Delete message log by ID
router.delete('/message-logs/:id', messageLogController.deleteMessageLogById);

module.exports = router;