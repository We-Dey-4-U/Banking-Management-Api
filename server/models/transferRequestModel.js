const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const db = mysql.createConnection(dbConfig);

// Create a new transfer request
const createTransferRequest = (requestData, callback) => {
  const { from_account_id, to_account_id, amount, is_interbank } = requestData;

  const query = `
    INSERT INTO transfer_requests (from_account_id, to_account_id, amount, status, is_interbank)
    VALUES (?, ?, ?, 'Pending', ?)
  `;

  db.query(query, [from_account_id, to_account_id, amount, is_interbank], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get all transfer requests for a specific account
const getAllTransferRequestsByAccountId = (accountId, callback) => {
  const query = `
    SELECT * FROM transfer_requests
    WHERE from_account_id = ? OR to_account_id = ?
  `;

  db.query(query, [accountId, accountId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get transfer request by ID
const getTransferRequestById = (requestId, callback) => {
  const query = 'SELECT * FROM transfer_requests WHERE request_id = ?';

  db.query(query, [requestId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Update transfer request status by ID
const updateTransferRequestStatusById = (requestId, newStatus, callback) => {
  const query = 'UPDATE transfer_requests SET status = ? WHERE request_id = ?';

  db.query(query, [newStatus, requestId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Delete transfer request by ID
const deleteTransferRequestById = (requestId, callback) => {
  const query = 'DELETE FROM transfer_requests WHERE request_id = ?';

  db.query(query, [requestId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

module.exports = {
  createTransferRequest,
  getAllTransferRequestsByAccountId,
  getTransferRequestById,
  updateTransferRequestStatusById,
  deleteTransferRequestById,
};