
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

app.post('/chatgpt-cepamex', (req, res) => {
  const pregunta = req.body.message || 'Sin mensaje';
  res.json({ reply: `Recibido: ${pregunta}. Backend activo en Render 🚀` });
});

module.exports = app;
