const Sequelize = require('sequelize');
const sequelize = new Sequelize('Api-node-basic', 'root', 'root', {
	host: 'localhost',
	dialect: 'mysql'
});

module.exports = sequelize;
