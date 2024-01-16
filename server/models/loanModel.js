const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const db = mysql.createConnection(dbConfig);

// Create a new loan
const createLoan = (loanData, callback) => {
  const { account_id, loan_type, amount, interest_rate, status } = loanData;

  const query = `
    INSERT INTO loans (account_id, loan_type, amount, interest_rate, status)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(query, [account_id, loan_type, amount, interest_rate, status], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get all loans for a specific account
const getAllLoansByAccountId = (accountId, callback) => {
  const query = 'SELECT * FROM loans WHERE account_id = ?';

  db.query(query, [accountId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get loan by ID
const getLoanById = (loanId, callback) => {
  const query = 'SELECT * FROM loans WHERE loan_id = ?';

  db.query(query, [loanId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Update loan status by ID
const updateLoanStatusById = (loanId, newStatus, callback) => {
  const query = 'UPDATE loans SET status = ? WHERE loan_id = ?';

  db.query(query, [newStatus, loanId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Delete loan by ID
const deleteLoanById = (loanId, callback) => {
  const query = 'DELETE FROM loans WHERE loan_id = ?';

  db.query(query, [loanId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

module.exports = {
  createLoan,
  getAllLoansByAccountId,
  getLoanById,
  updateLoanStatusById,
  deleteLoanById,
};