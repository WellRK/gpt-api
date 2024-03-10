const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para processar o corpo da solicitação como JSON
app.use(bodyParser.json());

// Rota para lidar com solicitações POST do cliente
app.post('/api/message', (req, res) => {
  console.log('Received message:', req.body);
  res.json({ message: 'Message received successfully!' });
});

// Inicializa o servidor HTTP
const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
