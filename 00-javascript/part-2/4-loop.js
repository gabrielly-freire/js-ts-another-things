// while - enquanto a condição for verdadeira, o bloco de código será executado
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// do while - executa o bloco de código e depois verifica a condição
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 10);

// for - estrutura de repetição
for (let k = 0; k < 10; k++) {
    console.log(k);
}

// for in - percorre as propriedades de um objeto
let person = {
    name: 'Maria',
    age: 25,
    weight: 55.5
}

for (let property in person) {
    console.log(property + ": " + person[property]);
}

// for of - percorre os valores de um objeto iterável
let fruits = ['banana', 'apple', 'orange']
for (let fruit of fruits) {
    console.log(fruit);
}

// forEach - percorre os elementos de um array
fruits.forEach(function (fruit, index) {
    console.log(index, fruit);
});