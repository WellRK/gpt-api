import axios from 'axios';
//import { config } from '../config/config';




const config = {
  headers: {
    'Authorization': 'Bearer 1234',
    'Content-Type': 'application/json'
  }
};


const handleConnection = (socket) => {
  console.log('Novo cliente conectado');

  socket.on('message', (message) => {
    console.log('Mensagem recebida do cliente:', message);

    const requestBody = {
      input_data: {
        input_string: [
          {
            role: 'user',
            content: message
          }
        ],
        parameters: {
          temperature: 0.6,
          top_p: 0.9,
          do_sample: true,
          max_new_tokens: 200
        }
      }
    };

    axios.post(process.env.URL, requestBody, config)
      .then(response => {
        console.log('Resposta recebida do modelo:');
        console.log(response.data);

        // Envia a resposta para o cliente
        socket.emit('response', response.data);
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
        // Envia um erro para o cliente
        socket.emit('modelError', 'Erro ao processar a solicitação');
      });
  });
};

 
export default handleConnection;