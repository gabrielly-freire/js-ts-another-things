// Criando um array com construtor
const list1 = new Array()
console.log(list1.length) // 0

// Criando um array com construtor e passando o tamanho
const list2 = new Array(10)
console.log(list2.length) // 10

const fruits = ['banana', 'apple', 'orange']
console.log(fruits.length) // 3
console.log(fruits[0]) // banana

let fullName = "Maria Santos Silva"

console.log(Array.from(fullName)) // [ 'M', 'a', 'r', 'i', 'a', ' ', 'S', 'a', 'n', 't', 'o', 's', ' ', 'S', 'i', 'l', 'v', 'a']

let users = []
users.push('Maria') // Adiciona um elemento no final do array
users.unshift('João') // Adiciona um elemento no início do array
users.pop() // Remove o último elemento do array
users.shift() // Remove o primeiro elemento do array

users.indexOf('Maria') // Retorna o índice do elemento no array
users.indexOf('Mauro') // Retorna -1 se o elemento não existir no array

// params: índice, quantidade de elementos a serem removidos
users.splice(1, 1) // Remove um elemento do array a partir do índice 1

users.includes('Maria') // Retorna true se o elemento existir no array

// Em javascript o conteúdo do array pode ser de tipos diferentes
let mix = [1, 'Maria', true, {name: 'Maria'}]