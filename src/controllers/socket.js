import axios from 'axios';
import { cosineSimilarity, calcularSimilaridadeCosseno} from '../utils/utils.js';
import { perguntasRespostas} from '../utils/perguntasRespostas.js';
import { dadosCompletos } from '../utils/dadosCompletos.js';
import { dadosSemelhantes } from '../utils/dadosSemelhantes.js';
import { config } from '../config/config.js';


function verificarSemelhanca(entrada) {
  for (const perguntaResposta of perguntasRespostas) {
    const similaridade = calcularSimilaridadeCosseno(entrada, perguntaResposta.content);
   
    if (similaridade > 0.3) { 
      console.log("deu true");
      return perguntaResposta;
      
    }
  }
  return null;
}


const handleConnection = (socket) => {
  console.log('Novo cliente conectado');
  socket.on('message', (message) => {
    console.log('Mensagem recebida do cliente:', message);

    const { input_data } = dadosCompletos[0];
    input_data.input_string[0].content = message;

    const perguntaSemelhante = verificarSemelhanca(message);

    if (perguntaSemelhante) {
      
      axios.post(process.env.URL, dadosSemelhantes[0], config[0])
        .then(response => {
          console.log('Resposta recebida do modelo:');
          console.log(response.data);

          
          socket.emit('response', response.data);
        })
        .catch(error => {
          console.error('Ocorreu um erro:', error);
          e
          socket.emit('modelError', 'Erro ao processar a solicitação');
        });
    } else {
      
      axios.post(process.env.URL, dadosCompletos[0], config[0])
        .then(response => {
          console.log('Resposta recebida do modelo:');
          console.log(response.data);

          
          socket.emit('response', response.data);
        })
        .catch(error => {
          console.error('Ocorreu um erro:', error);
          // Envia um erro para o cliente
          socket.emit('modelError', 'Erro ao processar a solicitação');
        });
    }
  });
};

export default handleConnection;
