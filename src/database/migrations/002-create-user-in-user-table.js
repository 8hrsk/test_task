module.exports = {
    async up({ context: queryInterface }) {
        await queryInterface.bulkInsert('users', [{
            balance: 10000,
        }]);
    },

    async down({ context: queryInterface }) {
        await queryInterface.bulkDelete('users', {});
    }
}