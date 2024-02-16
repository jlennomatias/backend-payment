# API backend de pagamentos

A API permite a criação, listagem e cancelamento de um pagamento, conforme especificação do open finance.

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
