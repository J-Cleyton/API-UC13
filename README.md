# API de Carros - WEBAPI

Esta é uma API em construção, que será uma API RESTfull desenvolvida para o gerenciamento de informações de carros, utilizando
**Node.js** e **Express**. A API permite criar, ler, atualizar e excluir carros, com validação dos dados utilizando a 
biblioteca **Joi**

Este é um projeto de CRUD (Create, Reah, Update, Delete), que será expandido no futuro. Este é apenas o escopo inicial.

## Funcionalidades

**GET /**: Retorna a lísta completa de carros.
**GET /:sigla**: Retorna as informações de um carro específico, identificando pela sigla.
**POST /**: Adiciona um novo carro a lísta.
**PUT /:sigla**: Atualiza as informações de um carro especifico,  identificando pela sigla.
**DELETE /:sigla**: Remove um carro especifico pela sigla. 

## Estrutura inicial do projeto

**app.js**: Arquivo principal que configura o servidor Express e as rotas da API
**tabelacarros.js**: Contém a lista de carros (dados ficticios)
**validacao.js**: Contém as validações joi para os dados dos carros

## Tecnologias usadas

**Node.js**: Ambiente de execução para JavaScript.
**Express**: Framework para construção de API REST.
**Joi**: Biblioteca para validação de dados.

## Endpoints

### 1. **GET /**

Retorna a lista completa de carros disponiveis.

#### Exemplo de resposta:

```Json
[
    {
        "nome": "Ferrari",
        "sigla": "FER",
        "velocidadeMaxima": 340,
        "potencia": 800,
        "consumo": 5.5
    },
    {
        "nome": "Lamborghini",
        "sigla": "LAM",
        "velocidadeMaxima": 355,
        "potencia": 770,
        "consumo": 6.2

    }
]

## Como rodar o projeto

1. **Clone este repositório:**

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git
    ´´´

2. **Instale as dependências:**

    Navegue até o diretorio do projeto e execute o comando:

    ```bash
    npm install
    ´´´

3. **Inicie o servidor:**

    Após a instalação das dependências, inicie o servidor:

    ```bash
    node ./app.js
    ´´´

4. ** Acesse a API:**

    A API estará disponivel em [http://localhost:3000](http://localhost:3000).0