# Fundamentos do nodejs

## Iniciando com o nodejs

O Node.js é um ambiente de execução JavaScript que permite executar código JavaScript lado do servidor.

### Comando para iniciar um projeto nodejs

```bash
npm init -y
```

### Padrões de importação
    
```javascript
const http = require('node:http'); // CommonJS - importação de um
const express = require('express'); // CommonJS
import express from 'express'; // ESModule
```

Por padrão o node utiliza o CommonJS, para utilizar o ESModule é necessário editar o arquivo package.json e adicionar o seguinte código:

```json
    "type": "module"
```

### Adição de scripts no package.json

```json
    "scripts": {
        "dev": "node --watch src/index.js" // Adiciona o watch para reiniciar o servidor a cada alteração
    }
```

Para executar o script basta rodar o comando:

```bash
npm run dev
```

## Estrutura da aplicação

- Métodos HTTP
    - GET: Buscar informações do back-end
    - POST: Criar uma informação no back-end
    - PUT/PATCH: Alterar uma informação no back-end
    - DELETE: Deletar uma informação no back-end
- Stateful e Stateless
    - Stateless: Não guarda estado - fica no banco de dados, quando o servidor é reiniciado os dados são mantidos
    - Stateful: Guarda estado - fica em memória, quando o servidor é reiniciado os dados são perdidos
- Cabeçalho
    - Request Header: Cabeçalho da requisição
    - Response Header: Cabeçalho da resposta
- Status code
    - 1xx: Informação
    - 2xx: Sucesso
    - 3xx: Redirecionamento
    - 4xx: Erro do cliente
    - 5xx: Erro do servidor 

## Streams no nodejs

Streams são fluxos de dados que permitem ler e escrever dados de forma eficiente, mesmo em arquivos muito grandes sem a necessidade de carregar tudo na memória. Ou seja, é possível ler e escrever dados de forma incremental.

### Tipos de streams