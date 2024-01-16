const transferRequestModel = require('../models/transferRequestModel');

// Create a new transfer request
const createTransferRequest = (req, res) => {
  const requestData = req.body;

  transferRequestModel.createTransferRequest(requestData, (err, result) => {
    if (err) {
      console.error('Error creating transfer request:', err);
      res.status(500).json({ error: 'Error creating transfer request' });
    } else {
      res.status(201).json({ message: 'Transfer request created successfully', request: result });
    }
  });
};

// Get all transfer requests for a specific account
const getAllTransferRequestsByAccountId = (req, res) => {
  const accountId = req.params.account_id;

  transferRequestModel.getAllTransferRequestsByAccountId(accountId, (err, result) => {
    if (err) {
      console.error('Error getting transfer requests:', err);
      res.status(500).json({ error: 'Error getting transfer requests' });
    } else {
      res.json(result);
    }
  });
};

// Get transfer request by ID
const getTransferRequestById = (req, res) => {
  const requestId = req.params.id;

  transferRequestModel.getTransferRequestById(requestId, (err, result) => {
    if (err) {
      console.error('Error getting transfer request:', err);
      res.status(500).json({ error: 'Error getting transfer request' });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: 'Transfer request not found' });
      } else {
        res.json(result[0]);
      }
    }
  });
};

// Update transfer request status by ID
const updateTransferRequestStatusById = (req, res) => {
  const requestId = req.params.id;
  const newStatus = req.body.status;

  transferRequestModel.updateTransferRequestStatusById(requestId, newStatus, (err, result) => {
    if (err) {
      console.error('Error updating transfer request status:', err);
      res.status(500).json({ error: 'Error updating transfer request status' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Transfer request not found' });
      } else {
        res.json({ message: 'Transfer request status updated successfully' });
      }
    }
  });
};

// Delete transfer request by ID
const deleteTransferRequestById = (req, res) => {
  const requestId = req.params.id;

  transferRequestModel.deleteTransferRequestById(requestId, (err, result) => {
    if (err) {
      console.error('Error deleting transfer request:', err);
      res.status(500).json({ error: 'Error deleting transfer request' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Transfer request not found' });
      } else {
        res.json({ message: 'Transfer request deleted successfully' });
      }
    }
  });
};

module.exports = {
  createTransferRequest,
  getAllTransferRequestsByAccountId,
  getTransferRequestById,
  updateTransferRequestStatusById,
  deleteTransferRequestById,
};