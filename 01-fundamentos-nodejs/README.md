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