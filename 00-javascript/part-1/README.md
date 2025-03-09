# JavaScript Básico

## Variáveis

### Escopo

- Global - acessível em todo o código
- Função - acessível apenas dentro de uma função
- Bloco - acessível apenas dentro de um bloco (if, for, while, etc)

### Hoisting

- Declarações de variáveis e funções são movidas para o topo do escopo, ou seja, podem ser usadas antes de serem declaradas

```javascript
console.log(a); // undefined
var a = 1;
```

### var, let e const

|               | var     | let | const |
| ------------- | ------- | --- | ----- |
| Escopo Global | **Sim** | Não | Não   |
| Escopo Função | Sim     | Sim | Sim   |
| Escopo Bloco  | Não     | Sim | Sim   |
| Hoisting      | Sim     | Não | Não   |
| Reatribuição  | Sim     | Sim | Não   |

let e const são mais recomendáveis uma vez que não têm escopo global e não sofrem hoisting.

### Tipos Primitivos

- string
- number
- boolean
- null
- undefined

## Operadores e Expressões

### Operadores Aritméticos

- Adição (+)
- Subtração (-)
- Multiplicação (*)
- Divisão (/)
- Módulo (%)
- Exponenciação (**)

### Operadores de Atribuição

- Atribuição simples (=)
- Adição e atribuição (+=)
- ...

### Operadores de Comparação

- Igual (==): considera apenas o valor
- Estritamente igual (===): considera o tipo e o valor
- Diferente (!=)
- Estritamente diferente (!==)

### Operadores Lógicos

- E (&&)
- Ou (||)
- Não (!)

### Falsy e Truthy

- Falsy: false, 0, '', null, undefined, NaN
- Truthy: true, {}, [], 1, 'a', ...

## Controle de Fluxo

- Operador ternário
- if-else
- if-else if-else
- switch-case
- try-catch

## Funções

- Declaração de função
- Anonymous function
- Arrow functions
- É possível passar funções como parâmetros - callback
- É possível atribuir funções a variáveis
- É possível atribuir valores padrão aos parâmetros

## Document Object Model (DOM)