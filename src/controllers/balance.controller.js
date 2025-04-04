const balanceService = require('../services/balance.service.js');

class BalanceController {
    static async update(req, res) {
        console.log(req.body);
        balanceService.updateUserBalance(req.body.userId, req.body.value);
        res.send({result: true})
    }
}

module.exports = BalanceController;