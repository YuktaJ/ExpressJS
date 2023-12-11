const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Laxmip@2013',
    {
        dialect: 'mysql',
        host: 'localhost'
    });

module.exports = sequelize;