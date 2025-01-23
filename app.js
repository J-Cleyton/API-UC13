import carros2025 from "./tabelacarros.js"; //

// Importa o módulo do Express.
import express from 'express';

const app = express();

// Configura o express para entender requisições com o corpo em formato JSON.
app.use(express.json());

// Define uma rota get no caminho '/' que irá retornar a lista completa de carros.
app.get('/', (requisicao, resposta) => {
    // Quando a rota for acessada, a resposta terá o codigo de status 200 (ok) e enviara a lista de carros.
    resposta.status(200).send(carros2025);  // Retorna lista de carros com status 200 (requisição bem-sucedida).
});

app.get('/:sigla', (req, res) => {
    const siglaInformada = req.params.sigla.toUpperCase();  // Obtém a sigla e deixa Maíuscula
    const carro = carros2025.find(
        (infoCarro) => infoCarro.sigla === siglaInformada
    );  // Busca o carro pela silga.
    if (!carro) {
        // Se o carro não for encontrado retorna o erro 404.
        resposta.status(404).send("Não existe carro com a sigla informada!");
        return;
    }
    resposta.status(200).send(carro);   // Se encontrado retorna o carro e status 200.
});

// Define a porta do servidor
const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`Servidor rodando com sucesso na porta ${3000}`);
});


// Comandos para executar o app
// node app.js Inicia o Node.js
// npm start ou app.js ou ./app.js - Inicia o server