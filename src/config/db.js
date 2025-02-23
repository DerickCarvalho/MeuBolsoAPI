const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
});

sequelize.authenticate()
    .then(() => console.log('Conectado com sucesso ao DB!'))
    .catch(() => console.error('Erro ao conectar-se com o DB!', err));

module.exports = sequelize;