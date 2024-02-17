# API backend de pagamentos

A API permite a criação, listagem e cancelamento de um pagamento, conforme especificação do open finance.

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- [MongoDB](https://www.mongodb.com/try/download/community) (certifique-se de ter o MongoDB instalado e em execução)
- [PostgreSQL](https://www.postgresql.org/download/) (certifique-se de ter o MongoDB instalado e em execução)

## 📦 Tecnologias usadas:

**Front-end:**

**Back-end:**
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
* ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
* ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
* ![Keycloak]

## Configuração

1. Clone o repositório:

   ```bash
   git clone https://github.com/jlennomatias/backend-payment

2. Navegue até o diretório do projeto:

   ```bash
   cd backend-payment

3. Instale as dependências:

   ```bash
   npm install

4. Instale o mongo no docker, conforme arquivo no diretório:
    ./container/mongo+prisma.txt

5. Instale o postgressql e keycloak no docker:
  ./container/docker-compose up -d

## Funcionalidade

- Uma iniciadora consegue criar uma iniciação de pagamento, listar e cancelar o mesmo.

## Requisitos Funcionais

- [] Receber a requisição POST de pagamento
- [] Fazer o "de para" dos dados recebidos, com a base de dados interna de clientes.
- [] Cadastrar o pagamento no mongoDB
- [] Visualização de pagamento
- [] Cancelamento de pagamento

## Regras de Negócios

- A iniciadora deve fazer a criação de iniciação de pagamento.
- O backend deve receber a requisição, e buscar os dados do cliente em uma base de dados, para criar o pagamento.
