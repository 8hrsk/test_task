const Router = require('express').Router();
const balanceControler = require('../controllers/balance.controller.js');
const balanceMiddleware = require('../middleware/balance.middleware.js');

Router.post('/update', balanceMiddleware, balanceControler.update);

module.exports = Router;