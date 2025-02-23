require('dotenv').config();
const app = require('./app');
const sequelize = require('./config/db')

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}).catch(err => console.log('Erro ao sincronizar o DB!', err));