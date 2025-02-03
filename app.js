import express from 'express';

// Importa as rotas
import carroRoutes from "./routes/carroRoutes.js";

const app = express();

// Permite o express ler o .JSON
app.use(express.json());

// Chama as rotas de carros (Estrutura completa do código)
app.use("/carros", carroRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

// Comandos para executar o app
// node app.js Inicia o Node.js
// npm start ou app.js ou ./app.js - Inicia o server
// Iniciar server pelo nodemon
// Npx nodemon app.js npm nodemon

//git clone "https://github.com/J-Cleyton/API-UC13.git"		// Comando para clonar diretorio para o git.	Passo 1

//git config --global user.name "J-Cleyton"			// Insere o user name no git.			Passo 2
//git config --global user.email johnney.cleyton@gmail.com	// Insere o E-mail no git.			Passo 3

//git add .							// Isso salva o arquivo no git.			Passo 4

//git commit -m "Aula 22-01"					// Isso salva o local.				Passo 5

//git push							// Isso sobe o arquivo.				Passo 6


//https://github.com/J-Cleyton/Aulas-Senac.git