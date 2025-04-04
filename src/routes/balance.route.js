const Router = require('express').Router();
const balanceControler = require('../controllers/balance.controller.js');

Router.post('/update', balanceControler.update);

module.exports = Router;