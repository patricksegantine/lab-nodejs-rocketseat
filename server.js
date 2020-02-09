const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();	
app.use(express.json());

// Iniciando o banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

// Importando todos os models com o plugin require-dir
requireDir('./src/models');


// Rotas
app.use('/api', require('./src/routes'));


// Inicialização do servidor
const port = 3001;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
