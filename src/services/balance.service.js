const { User } = require('../database/database.js');

class BalanceService {
    
    /**
     * Update the balance of a user.
     * @param {number} userId Id of the user to update.
     * @param {number} value Value to add to the user's balance.
     */
    static async updateUserBalance(userId, value) {
        const user = await User.findByPk(userId);

        if (!user) return { error: 'User not found' };

        if (user.balance + value < 0) return { error: 'Balance cannot be negative' };

        user.balance += value;
        await user.save();
        return { balance: user.balance };
    }
}

module.exports = BalanceService;