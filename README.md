# Meal suggestion

[![CI/CD](https://github.com/wlsf82/meal-suggestion/actions/workflows/cicd.yml/badge.svg)](https://github.com/wlsf82/meal-suggestion/actions)
[![meal-suggestion](https://img.shields.io/endpoint?url=https://cloud.cypress.io/badge/simple/dyjimv/main&style=flat&logo=cypress)](https://cloud.cypress.io/projects/dyjimv/runs)

Gerador de refeições veganas com lista de ingredientes.

___

## Pré-requisitos

Para rodar a análise estática de código e os testes automatizados, você vai precisar dos seguintes sistemas instalados em seu computador:

- [Node.js](https://nodejs.org/en/) (usei a versão `v18.13.0` enquanto escrevia este documento)
- npm (usei a versão `8.19.3` enquanto escrevia este documento)

> **Obs.:** Ao instalar o Node.js, o npm é automaticamente instalado.

## Instalação

Para instalar as dependências de desenvolvimento, execute o comando `npm install` (ou `npm i`, para a versão curta).

## Análise estática de código

Este projeto utiliza o [ESLint](https://eslint.org/) para analisar o código estaticamente.

Para rodar a análise estática de código, utilize o comando `npm run lint`.

E para a auto-correção de problemas encontrados pela análise estática de código, utilize o comando `npm run lint:fix`.

## Testes

Este projeto utiliza o [Cypress.io](https://cypress.io) para os testes _end-to-end_, onde você pode executá-los tanto em modo interativo, como em modo _headless_.

Além disso, durante a integração e deploy contínuo, as execuções dos testes são gravadas no serviço [_Cypress Cloud_](https://cloud.cypress.io/projects/dyjimv/runs).

### Modo _headless_

Execute `npm test` (ou `npm t`, para a versão curta) para rodar todos os testes em modo _headless_.

### Modo interativo

Execute `npm run cy:open` para abrir a _Cypress App_ e executar os testes em modo interativo.

## Suporte este projeto

Para suportar este projeto, basta deixar uma ⭐.

___

Feito com ❤️ por [Walmyr](https://walmyr.dev).
