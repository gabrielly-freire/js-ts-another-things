// Strings
let username = 'user';
let email = 'user@example.com';

// passagem de mais de um argumento para console.log
console.log(username, email);

// concatenação de strings
console.log('Username: ' + username + ' Email: ' + email);

// template literals
console.log(`Username: ${username} Email: ${email}`);

// Numbers

// inteiros
let age = 30;

// decimais
let price = 10.5;

console.log(100 / "teste"); // NaN == not a number

// Boolean

let isLogged = true;
let isSubscribed = false;

// undefined

let user;

console.log(user); // undefined == sem conteúdo

// null

let empty = null; // não declaração expressa de ausência de valor

// Conversão de tipos
let value = "9";
console.log(typeof value);
console.log(typeof Number(value)); // conversão de string para número

let age2 = 30;
console.log(typeof age2);
console.log(typeof String(age2)); // conversão de número para string
console.log(typeof age2.toString()); // conversão de número para string

let option = 0;

console.log(Boolean(option)); // conversão de número para boolean

// Coerção de tipos

console.log(1 + '5'); // 15 - o número 1 é convertido para string e concatenado com a string '5' 