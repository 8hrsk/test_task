const { Sequelize, DataTypes } = require('sequelize');
const { Umzug, SequelizeStorage } = require('umzug');

const sequelize = new Sequelize(
  process.env.PG_DB_NAME,
  process.env.PG_USER,
  process.env.PG_PASSWORD,
  {
    host: 'db',
    port: process.env.DATABASE_PORT,
    dialect: 'postgres',
    pool: {
      max: 100,
      min: 5,
      acquire: 30000,
      idle: 10000
    }
});

const User = require('./models/User.js')(sequelize, DataTypes);

const umzug = new Umzug({
  migrations: { glob: 'src/database/migrations/*.js' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

module.exports = { sequelize, umzug, User };