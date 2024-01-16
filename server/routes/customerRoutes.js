// customerRoutes.js
const express = require('express');
const customerController = require('../controllers/customerController');

const router = express.Router();

// Create a new customer
router.post('/customers', customerController.createCustomer);

// Get all customers
router.get('/customers', customerController.getAllCustomers);

// Get a specific customer by ID
router.get('/customers/:id', customerController.getCustomerById);

// Update a customer by ID
router.put('/customers/:id', customerController.updateCustomerById);

// Delete a customer by ID
router.delete('/customers/:id', customerController.deleteCustomerById);

module.exports = router;