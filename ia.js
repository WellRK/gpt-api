import axios  from 'axios';
import http from 'http';

const config = {
  headers: {
    'Authorization': 'Bearer 1234',
    'Content-Type': 'application/json'
  }
};

const server = http.createServer((req, res) => {
  let requestData = '';

  req.on('data', chunk => {
    requestData += chunk;
  });

  req.on('end', () => {
    try {
      requestData = JSON.parse(requestData);

      // Envia a requisição para o endpoint desejado
      axios.post('https://rivia-rthzn.brazilsouth.inference.ml.azure.com/score', requestData, config)
        .then(response => {
          console.log('Resposta recebida:');
          console.log(response.data);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(response.data));
        })
        .catch(error => {
          console.error('Ocorreu um erro:', error);
          res.statusCode = 500;
          res.end('Erro ao processar a solicitação');
        });
    } catch (error) {
      console.error('Erro ao processar os dados recebidos:', error);
      res.statusCode = 400;
      res.end('Erro ao processar os dados recebidos');
    }
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
