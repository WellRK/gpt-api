import http from 'http';
import { Server } from 'socket.io';
import express from 'express';
import cors from 'cors';
import handleConnection from './controllers/socket.js'
import dotenv from "dotenv";
import path from 'path';

dotenv.config();

const app = express();
const server = http.createServer();


app.use(cors({origin: "*",}));

const io = new Server(server, {cors: {origin: "*",}});

io.on('connection', handleConnection);


//   console.log('Novo cliente conectado');

//   socket.on('message', (message) => {
//     console.log('Mensagem recebida do cliente:', message);

//     const requestBody = {
//       input_data: {
//         input_string: [
//           {
//             role: 'user',
//             content: message
//           }
//         ],
//         parameters: {
//           temperature: 0.6,
//           top_p: 0.9,
//           do_sample: true,
//           max_new_tokens: 200
//         }
//       }
//     };

//     axios.post('https://rivia-rthzn.brazilsouth.inference.ml.azure.com/score', requestBody, config)
//       .then(response => {
//         console.log('Resposta recebida do modelo:');
//         console.log(response.data);

//         // Envia a resposta para o cliente
//         socket.emit('response', response.data);
//       })
//       .catch(error => {
//         console.error('Ocorreu um erro:', error);
//         // Envia um erro para o cliente
//         socket.emit('modelError', 'Erro ao processar a solicitação');
//       });
//   });
// });



const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});


