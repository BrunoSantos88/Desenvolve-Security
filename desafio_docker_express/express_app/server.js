const express = require('express');
const app = express();
const PORT = 3000;

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Inicia o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});