import carros2025 from "./tabelacarros.js";

// Importa o módulo do Express
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (requisicao, resposta) => {
    resposta.status(200).send(carros2025);  // Retorna lista de carros com status 200
});

// Define a porta do servidor
const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`Servidor rodando com sucesso na porta ${3000}`);
});


// Comandos para executar o app
// node app.js Inicia o Node.js
// npm start ou app.js ou ./app.js - Inicia o server