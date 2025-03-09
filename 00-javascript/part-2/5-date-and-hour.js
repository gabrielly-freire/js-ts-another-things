// Iniciando com Date
const date = new Date(); // Data atual

console.log(new Date(0)); // Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)

// 01/02/2025
console.log(new Date(2025, 1, 1)) // passando ano, mês e dia - o mês começa em 0 

console.log(new Date('2025-02-01')) // passando uma string no formato ISO
console.log(new Date('2025-02-01T00:00:00Z')) // passando uma string no formato ISO
console.log(new Date('February 01 2025')) // passando uma string no formato completo

// Getters
console.log(date.getDay()) // Dia da semana: 0-6
console.log(date.getDate()) // Dia do mês: 1-31
console.log(date.getMonth()) // Mês: 0-11
console.log(date.getFullYear()) // Ano
console.log(date.getHours()) // Horas: 0-23
console.log(date.getMinutes()) // Minutos: 0-59
console.log(date.getSeconds()) // Segundos: 0-59
console.log(date.getMilliseconds()) // Milisegundos: 0-999

// Setters
date.setFullYear(2022)
date.setDate(5) // Dia do mês
// ...

console.log(date) // Data em formato de string

// Formantando datas
const otherDate = new Date('2021-04-02T20:20:47')
console.log(otherDate.getDate().toString().padStart(2, '0')) // 02
console.log(otherDate.toDateString()) // Fri Apr 02 2021
console.log(otherDate.toLocaleDateString()) // 02/04/2021
console.log(otherDate.toLocaleTimeString()) // 20:20:47
console.log(otherDate.toLocaleString()) // 02/04/2021, 20:20:47

// Formantando datas com opções
console.log(otherDate.toLocaleDateString('pt-BR', {
    dateStyle: 'full'
}))

// Timestamp - milisegundos desde 1970
// UCT - Tempo Universal Coordenado