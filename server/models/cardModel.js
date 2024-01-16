const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const db = mysql.createConnection(dbConfig);

// Create a new card
const createCard = (cardData, callback) => {
  const { account_id, card_number, expiration_date, cvv } = cardData;

  const query = `
    INSERT INTO cards (account_id, card_number, expiration_date, cvv)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [account_id, card_number, expiration_date, cvv], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get all cards for a specific account
const getAllCardsByAccountId = (accountId, callback) => {
  const query = 'SELECT * FROM cards WHERE account_id = ?';

  db.query(query, [accountId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Get card by ID
const getCardById = (cardId, callback) => {
  const query = 'SELECT * FROM cards WHERE card_id = ?';

  db.query(query, [cardId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

// Delete card by ID
const deleteCardById = (cardId, callback) => {
  const query = 'DELETE FROM cards WHERE card_id = ?';

  db.query(query, [cardId], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    return callback(null, result);
  });
};

module.exports = {
  createCard,
  getAllCardsByAccountId,
  getCardById,
  deleteCardById,
};