const { sequelize, User } = require('../database/database.js');

class BalanceService {
    
    /**
     * Update the balance of a user.
     * @param {number} userId Id of the user to update.
     * @param {number} value Value to add to the user's balance.
     */
    static async updateUserBalance(userId, value) {
        try {
            const [ result ] = await sequelize.query(`
                    UPDATE "users"
                    SET balance = balance + :value
                    WHERE id = :userId AND (balance + :value) >= 0
                    RETURNING *;
                `, 
                {
                    replacements: {
                        userId,
                        value
                    },

                    type: sequelize.QueryTypes.UPDATE
            });

            if (result.length > 0) return {result: true, balance: result[0].balance};

            const [ userCheck ] = await sequelize.query(`
                SELECT id FROM "users" WHERE id = :userId;
              `, {
                replacements: { userId },
                type: sequelize.QueryTypes.SELECT
            });

            if (userCheck.length === 0) return {result: false, error: 'User not found'};
            return {result: false, error: 'Insufficient balance'};
        } catch (error) {
            return {result: false, error: error.message};
        }
    }
}

module.exports = BalanceService;