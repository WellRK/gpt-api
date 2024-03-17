import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';
import path from 'node:path';
import { fileURLToPath } from 'url';


import {LlamaModel, LlamaContext, LlamaChatSession} from "node-llama-cpp";


const __dirname = path.dirname(fileURLToPath(import.meta.url));

const model = new LlamaModel({
    modelPath: path.join(__dirname, "models", "codellama-13b.Q3_K_M.gguf")
});
const context = new LlamaContext({model});
const session = new LlamaChatSession({context});



const app = express()
const server = createServer(app)

const io = new Server(server)

io.on("connection", (soc) => {
    console.log("Connection is on");
    soc.on("message" , async (msg) => {
    const bot_reply = await session.prompt(msg);
    soc.emit("response" , bot_reply);


    });
});



const PORT = process.env.PORT || 8081

app.get('/test' , (_, res)=> {
    res.send("This is just a test")
})

server.listen(PORT, () => {

    console.log("Server started on port %d", PORT)
})
