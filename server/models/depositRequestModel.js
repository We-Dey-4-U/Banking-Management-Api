const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const db = mysql.createConnection(dbConfig);

// Create a new deposit request
const createDepositRequest = (requestData, callback) => {
  const { account_id, amount } = requestData;

  const query = `
    INSERT INTO deposit_requests (account_id, amount, status)
    VALUES (?, ?, 'Pending')
  `;

  db.query(query, [account_id, amount], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get all deposit requests for a specific account
const getAllDepositRequestsByAccountId = (accountId, callback) => {
  const query = `
    SELECT * FROM deposit_requests
    WHERE account_id = ?
  `;

  db.query(query, [accountId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get deposit request by ID
const getDepositRequestById = (requestId, callback) => {
  const query = 'SELECT * FROM deposit_requests WHERE request_id = ?';

  db.query(query, [requestId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Update deposit request status by ID
const updateDepositRequestStatusById = (requestId, newStatus, callback) => {
  const query = 'UPDATE deposit_requests SET status = ? WHERE request_id = ?';

  db.query(query, [newStatus, requestId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Delete deposit request by ID
const deleteDepositRequestById = (requestId, callback) => {
  const query = 'DELETE FROM deposit_requests WHERE request_id = ?';

  db.query(query, [requestId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

module.exports = {
  createDepositRequest,
  getAllDepositRequestsByAccountId,
  getDepositRequestById,
  updateDepositRequestStatusById,
  deleteDepositRequestById,
};