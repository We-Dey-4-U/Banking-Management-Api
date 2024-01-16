// app.js
const express = require('express');
const customerRoutes = require('./routes/customerRoutes');
const accountRoutes = require('./routes/accountRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const cardRoutes = require('./routes/cardRoutes');
const loanRoutes = require('./routes/loanRoutes');
const loanPaymentRoutes = require('./routes/loanPaymentRoutes');
const transferRequestRoutes = require('./routes/transferRequestRoutes');
const withdrawalRequestRoutes = require('./routes/withdrawalRequestRoutes');
const depositRequestRoutes = require('./routes/depositRequestRoutes');
const messageLogRoutes = require('./routes/messageLogRoutes');
const dbConfig = require('./config/db.config');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.use(express.json());

// Include routes
app.use('/api', customerRoutes);
app.use('/api', accountRoutes);
app.use('/api', transactionRoutes);
app.use('/api', cardRoutes);
app.use('/api', loanRoutes);
app.use('/api', loanPaymentRoutes);
app.use('/api', transferRequestRoutes);
app.use('/api', withdrawalRequestRoutes);
app.use('/api', depositRequestRoutes);
app.use('/api', messageLogRoutes); 


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});