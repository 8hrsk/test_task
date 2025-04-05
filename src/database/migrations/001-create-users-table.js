module.exports = {
    async up({ context: queryInterface }) {
        await queryInterface.createTable('users', {
            id: {
                type: 'SERIAL',
                primaryKey: true
            },
            balance: {
                type: 'INTEGER',
                allowNull: false
            },
        });
    },

    async down({ context: queryInterface }) {
        await queryInterface.dropTable('users');
    }
}