
function message() {
    console.log("Hello, World!");
}

function message(name = "Fulano") { // parâmetro com valor padrão
    console.log(`Hello, ${name}!`);
}

function sum(a, b) {
    return a + b;
}

message(); // Hello, Fulano! - não existe sobrecarga de funções em JavaScript??
message('user'); // Hello, user!
console.log(sum(1, 2)); // 3

// JSdoc - documentação de funções

/**
 * Autenticates user
 * 
 * @param {String} email user email 
 * @param {String} password  more than 6 characters
 * @returns {Number} user id
 */
function signIn(email, password) {
    // Fluxo de autenticação de usuário

    return 1; // id do usuário autenticado
}

// Funções anônimas

const message1 = function () {
    return "Hello, World!";
}

console.log(message1()); // Hello, World!

// Arrow functions

const message2 = () => {
    return "Hello, Arrow!";
}

console.log(message2()); // Hello, World!

// Callbacks

function execute(taskName, callback) {
    console.log(`Starting ${taskName}...`);
    callback();
}

function callback() {
    console.log("Task completed!");
}

execute("Task", callback); // Starting Task... Task completed!

// é possível passar uma função anônima ou arrow como callback