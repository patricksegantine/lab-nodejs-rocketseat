const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o db
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

// Importando todos os models com o plugin require-dir
// require('./src/models/Product');
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

const port = 3001;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
