const dotenv = require('dotenv');
dotenv.config();

const app = require('./app.js');
const { sequelize, umzug } = require('./database/database.js');

(async () => {
    await sequelize.authenticate();
    await umzug.up();
    
    app.listen(process.env.APP_PORT, () => {
        console.log(`http://localhost:${process.env.APP_PORT}`);
    })
})();