const express = require('express');
const routes = express.Router();

routes.get('/products', (req, res) => {
  return res.json({ status: 'Ok', message: 'Tudo funcionando!' });
});

module.exports = routes;