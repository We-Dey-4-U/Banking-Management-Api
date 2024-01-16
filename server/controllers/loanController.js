const loanModel = require('../models/loanModel');

// Create a new loan
const createLoan = (req, res) => {
  const loanData = req.body;

  loanModel.createLoan(loanData, (err, result) => {
    if (err) {
      console.error('Error creating loan:', err);
      res.status(500).json({ error: 'Error creating loan' });
    } else {
      res.status(201).json({ message: 'Loan created successfully', loan: result });
    }
  });
};

// Get all loans for a specific account
const getAllLoansByAccountId = (req, res) => {
  const accountId = req.params.account_id;

  loanModel.getAllLoansByAccountId(accountId, (err, result) => {
    if (err) {
      console.error('Error getting loans:', err);
      res.status(500).json({ error: 'Error getting loans' });
    } else {
      res.json(result);
    }
  });
};

// Get loan by ID
const getLoanById = (req, res) => {
  const loanId = req.params.id;

  loanModel.getLoanById(loanId, (err, result) => {
    if (err) {
      console.error('Error getting loan:', err);
      res.status(500).json({ error: 'Error getting loan' });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: 'Loan not found' });
      } else {
        res.json(result[0]);
      }
    }
  });
};

// Update loan status by ID
const updateLoanStatusById = (req, res) => {
  const loanId = req.params.id;
  const newStatus = req.body.status;

  loanModel.updateLoanStatusById(loanId, newStatus, (err, result) => {
    if (err) {
      console.error('Error updating loan status:', err);
      res.status(500).json({ error: 'Error updating loan status' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Loan not found' });
      } else {
        res.json({ message: 'Loan status updated successfully' });
      }
    }
  });
};

// Delete loan by ID
const deleteLoanById = (req, res) => {
  const loanId = req.params.id;

  loanModel.deleteLoanById(loanId, (err, result) => {
    if (err) {
      console.error('Error deleting loan:', err);
      res.status(500).json({ error: 'Error deleting loan' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Loan not found' });
      } else {
        res.json({ message: 'Loan deleted successfully' });
      }
    }
  });
};

module.exports = {
  createLoan,
  getAllLoansByAccountId,
  getLoanById,
  updateLoanStatusById,
  deleteLoanById,
};