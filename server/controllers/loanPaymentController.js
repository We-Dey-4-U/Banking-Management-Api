const loanPaymentModel = require('../models/loanPaymentModel');

// Create a new loan payment
const createLoanPayment = (req, res) => {
  const paymentData = req.body;

  loanPaymentModel.createLoanPayment(paymentData, (err, result) => {
    if (err) {
      console.error('Error creating loan payment:', err);
      res.status(500).json({ error: 'Error creating loan payment' });
    } else {
      res.status(201).json({ message: 'Loan payment created successfully', payment: result });
    }
  });
};

// Get all loan payments for a specific loan
const getAllLoanPaymentsByLoanId = (req, res) => {
  const loanId = req.params.loan_id;

  loanPaymentModel.getAllLoanPaymentsByLoanId(loanId, (err, result) => {
    if (err) {
      console.error('Error getting loan payments:', err);
      res.status(500).json({ error: 'Error getting loan payments' });
    } else {
      res.json(result);
    }
  });
};

// Get loan payment by ID
const getLoanPaymentById = (req, res) => {
  const paymentId = req.params.id;

  loanPaymentModel.getLoanPaymentById(paymentId, (err, result) => {
    if (err) {
      console.error('Error getting loan payment:', err);
      res.status(500).json({ error: 'Error getting loan payment' });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: 'Loan payment not found' });
      } else {
        res.json(result[0]);
      }
    }
  });
};

// Delete loan payment by ID
const deleteLoanPaymentById = (req, res) => {
  const paymentId = req.params.id;

  loanPaymentModel.deleteLoanPaymentById(paymentId, (err, result) => {
    if (err) {
      console.error('Error deleting loan payment:', err);
      res.status(500).json({ error: 'Error deleting loan payment' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Loan payment not found' });
      } else {
        res.json({ message: 'Loan payment deleted successfully' });
      }
    }
  });
};

module.exports = {
  createLoanPayment,
  getAllLoanPaymentsByLoanId,
  getLoanPaymentById,
  deleteLoanPaymentById,
};