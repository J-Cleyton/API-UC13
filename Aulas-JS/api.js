import express from 'express';

const app = express();

// define a porta do servidor 
app.listen(3000, () => {
    console.log('Servidor rodando com sucesso na porta 3000')
});

// Comandos para executar o APP
// node app.js Inicia o Node.js
// npm start - Inicia o server