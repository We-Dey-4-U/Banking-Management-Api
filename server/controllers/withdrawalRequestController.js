const withdrawalRequestModel = require('../models/withdrawalRequestModel');

// Create a new withdrawal request
const createWithdrawalRequest = (req, res) => {
  const requestData = req.body;

  withdrawalRequestModel.createWithdrawalRequest(requestData, (err, result) => {
    if (err) {
      console.error('Error creating withdrawal request:', err);
      res.status(500).json({ error: 'Error creating withdrawal request' });
    } else {
      res.status(201).json({ message: 'Withdrawal request created successfully', request: result });
    }
  });
};

// Get all withdrawal requests for a specific account
const getAllWithdrawalRequestsByAccountId = (req, res) => {
  const accountId = req.params.account_id;

  withdrawalRequestModel.getAllWithdrawalRequestsByAccountId(accountId, (err, result) => {
    if (err) {
      console.error('Error getting withdrawal requests:', err);
      res.status(500).json({ error: 'Error getting withdrawal requests' });
    } else {
      res.json(result);
    }
  });
};

// Get withdrawal request by ID
const getWithdrawalRequestById = (req, res) => {
  const requestId = req.params.id;

  withdrawalRequestModel.getWithdrawalRequestById(requestId, (err, result) => {
    if (err) {
      console.error('Error getting withdrawal request:', err);
      res.status(500).json({ error: 'Error getting withdrawal request' });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: 'Withdrawal request not found' });
      } else {
        res.json(result[0]);
      }
    }
  });
};

// Update withdrawal request status by ID
const updateWithdrawalRequestStatusById = (req, res) => {
  const requestId = req.params.id;
  const newStatus = req.body.status;

  withdrawalRequestModel.updateWithdrawalRequestStatusById(requestId, newStatus, (err, result) => {
    if (err) {
      console.error('Error updating withdrawal request status:', err);
      res.status(500).json({ error: 'Error updating withdrawal request status' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Withdrawal request not found' });
      } else {
        res.json({ message: 'Withdrawal request status updated successfully' });
      }
    }
  });
};

// Delete withdrawal request by ID
const deleteWithdrawalRequestById = (req, res) => {
  const requestId = req.params.id;

  withdrawalRequestModel.deleteWithdrawalRequestById(requestId, (err, result) => {
    if (err) {
      console.error('Error deleting withdrawal request:', err);
      res.status(500).json({ error: 'Error deleting withdrawal request' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Withdrawal request not found' });
      } else {
        res.json({ message: 'Withdrawal request deleted successfully' });
      }
    }
  });
};

module.exports = {
  createWithdrawalRequest,
  getAllWithdrawalRequestsByAccountId,
  getWithdrawalRequestById,
  updateWithdrawalRequestStatusById,
  deleteWithdrawalRequestById,
};