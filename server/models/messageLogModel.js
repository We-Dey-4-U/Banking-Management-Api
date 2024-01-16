const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const db = mysql.createConnection(dbConfig);

// Create a new message log
const createMessageLog = (logData, callback) => {
  const { customer_id, message_text } = logData;

  const query = `
    INSERT INTO message_logs (customer_id, message_text)
    VALUES (?, ?)
  `;

  db.query(query, [customer_id, message_text], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get all message logs for a specific customer
const getAllMessageLogsByCustomerId = (customerId, callback) => {
  const query = `
    SELECT * FROM message_logs
    WHERE customer_id = ?
  `;

  db.query(query, [customerId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get message log by ID
const getMessageLogById = (logId, callback) => {
  const query = 'SELECT * FROM message_logs WHERE log_id = ?';

  db.query(query, [logId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Delete message log by ID
const deleteMessageLogById = (logId, callback) => {
  const query = 'DELETE FROM message_logs WHERE log_id = ?';

  db.query(query, [logId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

module.exports = {
  createMessageLog,
  getAllMessageLogsByCustomerId,
  getMessageLogById,
  deleteMessageLogById,
};