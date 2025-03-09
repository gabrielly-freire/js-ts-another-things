let message = "I'm studying JavaScript"
let text = "              Hello World!              "
let creditCard = "1234567812344928"
let lastFourDigits = creditCard.slice(-4)

console.log(message.toLowerCase()) // imprimindo a string em minúsculas
console.log(message.toUpperCase())  // imprimindo a string em maiúsculas
console.log(message.length) // imprimindo o tamanho da string
console.log(message.replace(' ', '-')) // substituindo espaços por hífens
console.log(message.split(' ')) // dividindo a string em um array de substrings
console.log(message.slice(0, 3)) // extraindo uma parte da string
console.log(text.trim()) // removendo espaços em branco do início e do fim da string

console.log(creditCard.slice(-4)) // extraindo os últimos quatro dígitos do cartão de crédito
console.log(lastFourDigits.padStart(creditCard.length, "X")) // substituindo os quatro últimos dígitos por X
console.log(lastFourDigits.padEnd(creditCard.length, "X")) // substituindo os quatro primeiros dígitos por X

let separate = message.split(' ')
console.log(separate.join('<3'))

console.log(message.includes('JavaScript')) // verificando se a string contém a palavra 'JavaScript'
console.log(message.indexOf('JavaScript')) // verificando a posição da palavra 'JavaScript' na string