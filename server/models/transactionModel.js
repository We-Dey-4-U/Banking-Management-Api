const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const db = mysql.createConnection(dbConfig);

// Create a new transaction
const createTransaction = (transactionData, callback) => {
  const { account_id, transaction_type, amount } = transactionData;

  const query = `
    INSERT INTO transactions (account_id, transaction_type, amount)
    VALUES (?, ?, ?)
  `;

  db.query(query, [account_id, transaction_type, amount], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get all transactions for a specific account
const getAllTransactionsByAccountId = (accountId, callback) => {
  const query = 'SELECT * FROM transactions WHERE account_id = ?';

  db.query(query, [accountId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

module.exports = {
  createTransaction,
  getAllTransactionsByAccountId,
};