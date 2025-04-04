const balanceService = require('../services/balance.service.js');

class BalanceController {
    static async update(req, res) {
        const result = await balanceService.updateUserBalance(req.body.userId, req.body.value);
        if (!result.result) return res.status(400).send({ error: result.error });
        return res.status(200).send({ balance: result.balance });
    }
}

module.exports = BalanceController;