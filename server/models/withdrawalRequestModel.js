const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const db = mysql.createConnection(dbConfig);

// Create a new withdrawal request
const createWithdrawalRequest = (requestData, callback) => {
  const { account_id, amount } = requestData;

  const query = `
    INSERT INTO withdrawal_requests (account_id, amount, status)
    VALUES (?, ?, 'Pending')
  `;

  db.query(query, [account_id, amount], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get all withdrawal requests for a specific account
const getAllWithdrawalRequestsByAccountId = (accountId, callback) => {
  const query = `
    SELECT * FROM withdrawal_requests
    WHERE account_id = ?
  `;

  db.query(query, [accountId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get withdrawal request by ID
const getWithdrawalRequestById = (requestId, callback) => {
  const query = 'SELECT * FROM withdrawal_requests WHERE request_id = ?';

  db.query(query, [requestId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Update withdrawal request status by ID
const updateWithdrawalRequestStatusById = (requestId, newStatus, callback) => {
  const query = 'UPDATE withdrawal_requests SET status = ? WHERE request_id = ?';

  db.query(query, [newStatus, requestId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Delete withdrawal request by ID
const deleteWithdrawalRequestById = (requestId, callback) => {
  const query = 'DELETE FROM withdrawal_requests WHERE request_id = ?';

  db.query(query, [requestId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

module.exports = {
  createWithdrawalRequest,
  getAllWithdrawalRequestsByAccountId,
  getWithdrawalRequestById,
  updateWithdrawalRequestStatusById,
  deleteWithdrawalRequestById,
};