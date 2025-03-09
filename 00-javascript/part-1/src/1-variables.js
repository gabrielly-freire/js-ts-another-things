var user; // Declaração de variável

console.log(user); // undefined

var email = 'teste@example.com'; // Declaração e atribuição de variável
console.log(email);

email = 'update@example.com'; // Reatribuição de variável
console.log(email);

var teste1 = 'minha variável'; // Declaração e atribuição de variável
var teste1 = 'minha nova variável'; // Reatribuição de variável'

let teste2 = 'minha variável'; // Declaração e atribuição de variável
// let teste2 = 'minha nova variável'; // SyntaxError: Identifier 'teste2' has already been declared

const teste3 = 'minha variável'; // Declaração e atribuição de variável
// const teste3 = 'minha nova variável'; // SyntaxError: Identifier 'teste3' has already been declared
// teste3 = 'minha nova variável'; // TypeError: Assignment to constant variable.

console.log(hoisting)
var hoisting = 1;

console.log(soma(1, 2));

function soma(a, b) {
    return a + b;
}

console.log(`
    teste
    teste
    ${email}
    `)