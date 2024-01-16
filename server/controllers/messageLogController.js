const messageLogModel = require('../models/messageLogModel');

// Create a new message log
const createMessageLog = (req, res) => {
  const logData = req.body;

  messageLogModel.createMessageLog(logData, (err, result) => {
    if (err) {
      console.error('Error creating message log:', err);
      res.status(500).json({ error: 'Error creating message log' });
    } else {
      res.status(201).json({ message: 'Message log created successfully', log: result });
    }
  });
};

// Get all message logs for a specific customer
const getAllMessageLogsByCustomerId = (req, res) => {
  const customerId = req.params.customer_id;

  messageLogModel.getAllMessageLogsByCustomerId(customerId, (err, result) => {
    if (err) {
      console.error('Error getting message logs:', err);
      res.status(500).json({ error: 'Error getting message logs' });
    } else {
      res.json(result);
    }
  });
};

// Get message log by ID
const getMessageLogById = (req, res) => {
  const logId = req.params.id;

  messageLogModel.getMessageLogById(logId, (err, result) => {
    if (err) {
      console.error('Error getting message log:', err);
      res.status(500).json({ error: 'Error getting message log' });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: 'Message log not found' });
      } else {
        res.json(result[0]);
      }
    }
  });
};

// Delete message log by ID
const deleteMessageLogById = (req, res) => {
  const logId = req.params.id;

  messageLogModel.deleteMessageLogById(logId, (err, result) => {
    if (err) {
      console.error('Error deleting message log:', err);
      res.status(500).json({ error: 'Error deleting message log' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Message log not found' });
      } else {
        res.json({ message: 'Message log deleted successfully' });
      }
    }
  });
};

module.exports = {
  createMessageLog,
  getAllMessageLogsByCustomerId,
  getMessageLogById,
  deleteMessageLogById,
};