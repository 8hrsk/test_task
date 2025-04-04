module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        balance: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false // <-- отключаем createdAt и updatedAt
    });

    return User;
};