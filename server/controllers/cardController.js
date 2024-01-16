const cardModel = require('../models/cardModel');

// Create a new card
const createCard = (req, res) => {
  const cardData = req.body;

  cardModel.createCard(cardData, (err, result) => {
    if (err) {
      console.error('Error creating card:', err);
      res.status(500).json({ error: 'Error creating card' });
    } else {
      res.status(201).json({ message: 'Card created successfully', card: result });
    }
  });
};

// Get all cards for a specific account
const getAllCardsByAccountId = (req, res) => {
  const accountId = req.params.account_id;

  cardModel.getAllCardsByAccountId(accountId, (err, result) => {
    if (err) {
      console.error('Error getting cards:', err);
      res.status(500).json({ error: 'Error getting cards' });
    } else {
      res.json(result);
    }
  });
};

// Get card by ID
const getCardById = (req, res) => {
  const cardId = req.params.id;

  cardModel.getCardById(cardId, (err, result) => {
    if (err) {
      console.error('Error getting card:', err);
      res.status(500).json({ error: 'Error getting card' });
    } else {
      if (result.length === 0) {
        res.status(404).json({ message: 'Card not found' });
      } else {
        res.json(result[0]);
      }
    }
  });
};

// Delete card by ID
const deleteCardById = (req, res) => {
  const cardId = req.params.id;

  cardModel.deleteCardById(cardId, (err, result) => {
    if (err) {
      console.error('Error deleting card:', err);
      res.status(500).json({ error: 'Error deleting card' });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Card not found' });
      } else {
        res.json({ message: 'Card deleted successfully' });
      }
    }
  });
};

module.exports = {
  createCard,
  getAllCardsByAccountId,
  getCardById,
  deleteCardById,
};