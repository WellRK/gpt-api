## Descrição 
Este é o repositório do projeto API RiverData.

## Instalação 

```bash
$ yarn
```

Ao clonar, no repositorio raiz de o comando yarn para instalar os pacotes.
Adicione o token no campo 'Authorization ->  /api-riverdata/src/config/config.js
pra rodar o projeto pode utilizar o meio padrão e genérico dentro da pasta /api-riverdata/src/ - > node app.js 

O projeto está rodando em http://localhost:3000/


## Sobre o projeto

Este projeto consiste em uma API que faz consultas em um modelo de GPT. Em um escopo mais amplo, tanto o fine tuning quanto a biblioteca node-nlp poderiam ser utilizados.

## Arquivos

socket2.js: Este arquivo, localizado em /api-riverdata/src/controllers/socket2.js, é um script genérico para rodar o projeto sem a lógica implementada.


O arquivo gpt.js /api-riverdata/src/utils/gpt.js é apenas um breve exemplo caso fosse utilizar um llama2 com um model de gpt de forma local.
São arquivos apenas para demonstrar que busquei um conhecimento mais profundo da tecnologia.


## Configuração de Consultas

As consultas ao modelo de GPT são configuradas com os seguintes parâmetros:

input_data: Esta é a parte onde você fornece os dados de entrada para o modelo. O modelo está enviando uma lista de strings de entrada, onde cada string tem um papel (role) e um conteúdo (content). Neste caso, o papel é 'user', indicando que é o texto fornecido pelo usuário.

parameters: Estes são os parâmetros de configuração para a geração de texto pelo modelo. Aqui estão os parâmetros utilizados->
    temperature: Controla a aleatoriedade da geração de texto. Quanto maior o valor, mais aleatório o texto gerado. 0.6 é um valor moderado.
    top_p: Também conhecido como "nucleus sampling", é uma técnica para controlar a diversidade do texto gerado. 0.9 indica que o modelo deve considerar as palavras mais prováveis para gerar o texto.
    do_sample: Um booleano que indica se a amostragem deve ser realizada ou se o texto mais provável deve ser escolhido. Neste caso, está definido como true, o que significa que a amostragem será realizada
    max_new_tokens: Limita o número máximo de tokens (palavras ou caracteres) que o modelo pode gerar em resposta. Aqui está definido como 200.

## Lógica adicional

Eu apliquei também uma lógica utilizando um pouco da matemática para avaliar a entrada da consulta e filtrar se está associada ao tema “Dipirona”. Baseado nessa lógica, se o usuário setar apenas 3 palavras contidas em 
perguntasRespostas -> /api-riverdata/src/utils/perguntasRespostas.js na hora da consulta, através da lógica ele vai considerar como true e utilizar a consulta focada no médicamento do dipirona dadosSemelhantes -> /api-riverdata/src/utils/dadosSemelhantes.js, através da função verificarSemelhança ele verifica se a similaridade > 0.4(Essa verificação que está calculada em 3 palavras, a precisão da contagem varia do aumento ou diminuição do campo 0.4)


