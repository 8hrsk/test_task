const { sequelize, User } = require('../database/database.js');

class BalanceService {
    
    /**
     * Update the balance of a user.
     * @param {number} userId Id of the user to update.
     * @param {number} value Value to add to the user's balance.
     */
    static async updateUserBalance(userId, value) {
        try {
            const result = await sequelize.transaction(async (time) => {
                const user = await User.findByPk(userId);

                if (!user) return { error: 'User not found' };
                if (user.balance + value < 0) return { error: 'Balance cannot be negative' };

                user.balance += value;
                await user.save({ transaction: time });

                return { result: true, balance: user.balance };
            });

            return result;
        } catch (error) {
            return {result: false, error: error.message};
        }
    }
}

module.exports = BalanceService;