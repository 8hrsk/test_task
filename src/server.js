const dotenv = require('dotenv');
dotenv.config();

const app = require('./app.js');
const { sequelize, umzug } = require('./database/database.js');

(async () => {
    await sequelize.authenticate();
    await umzug.up();
    
    app.listen(3000, () => {
        console.log(`http://localhost:${process.env.APP_PORT}`);
    })
})();