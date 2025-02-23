const express = require('express');
const cors = require('cors');

// #region IMPORTANDO ROTAS

    const userRoutes = require('./routes/userRoutes');

// #endregion

const app = express();

app.use(cors());
app.use(express.json());

// #region USANDO ROTAS

    app.use('/users', userRoutes);

// #endregion

module.exports = app;