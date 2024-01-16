const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const db = mysql.createConnection(dbConfig);

// Create a new loan payment
const createLoanPayment = (paymentData, callback) => {
  const { loan_id, payment_amount } = paymentData;

  const query = `
    INSERT INTO loan_payments (loan_id, payment_amount)
    VALUES (?, ?)
  `;

  db.query(query, [loan_id, payment_amount], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get all loan payments for a specific loan
const getAllLoanPaymentsByLoanId = (loanId, callback) => {
  const query = 'SELECT * FROM loan_payments WHERE loan_id = ?';

  db.query(query, [loanId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get loan payment by ID
const getLoanPaymentById = (paymentId, callback) => {
  const query = 'SELECT * FROM loan_payments WHERE payment_id = ?';

  db.query(query, [paymentId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Delete loan payment by ID
const deleteLoanPaymentById = (paymentId, callback) => {
  const query = 'DELETE FROM loan_payments WHERE payment_id = ?';

  db.query(query, [paymentId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

module.exports = {
  createLoanPayment,
  getAllLoanPaymentsByLoanId,
  getLoanPaymentById,
  deleteLoanPaymentById,
};