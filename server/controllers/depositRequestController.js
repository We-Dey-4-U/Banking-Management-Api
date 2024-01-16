const depositRequestModel = require('../models/depositRequestModel');

// Create a new deposit request
const createDepositRequest = (req, res) => {
  const requestData = req.body;

  depositRequestModel.createDepositRequest(requestData, (err, result) => {
    if (err) {
      console.error('Error creating deposit request:', err);
      res.status(500).json({ error: 'Error creating deposit request' });
    } else {
      res.status(201).json({ message: 'Deposit request created successfully', request: result });
    }
  });
};

// Get all deposit requests for a specific account
const getAllDepositRequestsByAccountId = (req, res) => {
  const accountId = req.params.account_id;

  depositRequestModel.getAllDepositRequestsByAccountId(accountId, (err, result) => {
    if (err) {
      console.error('Error getting deposit requests:', err);
      res.status(500).json({ error: 'Error getting deposit requests' });
    } else {
      res.json(result);
    }
  });
};

// Get deposit request by ID
const getDepositRequestById = (req, res) => {
  const requestId = req.params.id;

  depositRequestModel.getDepositRequestById(requestId, (err, result) => {
    if (err) {
      console.error('Error getting deposit request:', err);
      res.status(500).json({ error: 'Error getting deposit request' });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: 'Deposit request not found' });
      } else {
        res.json(result[0]);
      }
    }
  });
};

// Update deposit request status by ID
const updateDepositRequestStatusById = (req, res) => {
  const requestId = req.params.id;
  const newStatus = req.body.status;

  depositRequestModel.updateDepositRequestStatusById(requestId, newStatus, (err, result) => {
    if (err) {
      console.error('Error updating deposit request status:', err);
      res.status(500).json({ error: 'Error updating deposit request status' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Deposit request not found' });
      } else {
        res.json({ message: 'Deposit request status updated successfully' });
      }
    }
  });
};

// Delete deposit request by ID
const deleteDepositRequestById = (req, res) => {
  const requestId = req.params.id;

  depositRequestModel.deleteDepositRequestById(requestId, (err, result) => {
    if (err) {
      console.error('Error deleting deposit request:', err);
      res.status(500).json({ error: 'Error deleting deposit request' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Deposit request not found' });
      } else {
        res.json({ message: 'Deposit request deleted successfully' });
      }
    }
  });
};

module.exports = {
  createDepositRequest,
  getAllDepositRequestsByAccountId,
  getDepositRequestById,
  updateDepositRequestStatusById,
  deleteDepositRequestById,
};