const { User } = require('../database/database.js');

class BalanceService {
    
    /**
     * Update the balance of a user.
     * @param {number} userId Id of the user to update.
     * @param {number} value Value to add to the user's balance.
     */
    static async updateUserBalance(userId, value) {
        const user = await (async () => {
            try {
                return await User.findByPk(userId);
            } catch (error) {
                return false;
            }
        })();
        
        console.log(user);
        
    }
}

module.exports = BalanceService;