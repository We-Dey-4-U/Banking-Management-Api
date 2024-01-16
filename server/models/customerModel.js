// customerModel.js
const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const db = mysql.createConnection(dbConfig);

// Create a new customer
const createCustomer = (customerData, callback) => {
  const { first_name, last_name, email, phone, address, bvn, nin } = customerData;

  const query = `
    INSERT INTO customers (first_name, last_name, email, phone, address, bvn, nin)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [first_name, last_name, email, phone, address, bvn, nin], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get all customers
const getAllCustomers = (callback) => {
  const query = 'SELECT * FROM customers';

  db.query(query, (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get a specific customer by ID
const getCustomerById = (customerId, callback) => {
  const query = 'SELECT * FROM customers WHERE customer_id = ?';

  db.query(query, [customerId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Update a customer by ID
const updateCustomerById = (customerId, customerData, callback) => {
  const { first_name, last_name, email, phone, address, bvn, nin } = customerData;

  const query = `
    UPDATE customers
    SET first_name = ?, last_name = ?, email = ?, phone = ?, address = ?, bvn = ?, nin = ?
    WHERE customer_id = ?
  `;

  db.query(query, [first_name, last_name, email, phone, address, bvn, nin, customerId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Delete a customer by ID
const deleteCustomerById = (customerId, callback) => {
  const query = 'DELETE FROM customers WHERE customer_id = ?';

  db.query(query, [customerId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

module.exports = {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById,
};