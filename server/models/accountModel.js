const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const db = mysql.createConnection(dbConfig);

// Create a new account
const createAccount = (accountData, callback) => {
  const { customer_id, account_type, balance } = accountData;

  const query = `
    INSERT INTO accounts (customer_id, account_type, balance)
    VALUES (?, ?, ?)
  `;

  db.query(query, [customer_id, account_type, balance], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get all accounts for a specific customer
const getAllAccountsByCustomerId = (customerId, callback) => {
  const query = 'SELECT * FROM accounts WHERE customer_id = ?';

  db.query(query, [customerId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get account by ID
const getAccountById = (accountId, callback) => {
  const query = 'SELECT * FROM accounts WHERE account_id = ?';

  db.query(query, [accountId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Update account balance by ID
const updateAccountBalanceById = (accountId, newBalance, callback) => {
  const query = 'UPDATE accounts SET balance = ? WHERE account_id = ?';

  db.query(query, [newBalance, accountId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Delete account by ID
const deleteAccountById = (accountId, callback) => {
  const query = 'DELETE FROM accounts WHERE account_id = ?';

  db.query(query, [accountId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

module.exports = {
  createAccount,
  getAllAccountsByCustomerId,
  getAccountById,
  updateAccountBalanceById,
  deleteAccountById,
};