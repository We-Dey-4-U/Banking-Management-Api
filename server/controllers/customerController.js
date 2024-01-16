const customerModel = require('../models/customerModel');

// Create a new customer
const createCustomer = (req, res) => {
  const customerData = req.body;

  customerModel.createCustomer(customerData, (err, result) => {
    if (err) {
      console.error('Error creating customer:', err);
      res.status(500).json({ error: 'Error creating customer' });
    } else {
      res.status(201).json({ message: 'Customer created successfully', customer: result });
    }
  });
};

// Get all customers
const getAllCustomers = (req, res) => {
  customerModel.getAllCustomers((err, result) => {
    if (err) {
      console.error('Error getting customers:', err);
      res.status(500).json({ error: 'Error getting customers' });
    } else {
      res.json(result);
    }
  });
};

// Get a specific customer by ID
const getCustomerById = (req, res) => {
  const customerId = req.params.id;

  customerModel.getCustomerById(customerId, (err, result) => {
    if (err) {
      console.error('Error getting customer:', err);
      res.status(500).json({ error: 'Error getting customer' });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: 'Customer not found' });
      } else {
        res.json(result[0]);
      }
    }
  });
};

// Update a customer by ID
const updateCustomerById = (req, res) => {
  const customerId = req.params.id;
  const customerData = req.body;

  customerModel.updateCustomerById(customerId, customerData, (err, result) => {
    if (err) {
      console.error('Error updating customer:', err);
      res.status(500).json({ error: 'Error updating customer' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Customer not found' });
      } else {
        res.json({ message: 'Customer updated successfully' });
      }
    }
  });
};

// Delete a customer by ID
const deleteCustomerById = (req, res) => {
  const customerId = req.params.id;

  customerModel.deleteCustomerById(customerId, (err, result) => {
    if (err) {
      console.error('Error deleting customer:', err);
      res.status(500).json({ error: 'Error deleting customer' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Customer not found' });
      } else {
        res.json({ message: 'Customer deleted successfully' });
      }
    }
  });
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
};