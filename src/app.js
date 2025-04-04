const express = require('express');
const balanceRoutes = require('./routes/balance.route.js');

const app = express();

app.use(express.json());
app.use('/balance', balanceRoutes);

module.exports = app;