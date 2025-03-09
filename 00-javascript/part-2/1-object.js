// Criação de um objeto vazio
const obj = {}
console.log(obj)
console.log(typeof obj)

const person = {
    name: {
        first: 'John',
        last: 'Doe'
    },
    age: 30,
    isStudent: false,
    message: function () {
        console.log(`Hello, my name is ${this.name.first} ${this.name.last}`) // arrow functions não possuem contexto de this, 
                                                                             // não é possível utilizá-las para acessar propriedades do objeto
    }
}

// Acessando propriedades do objeto pela notação de ponto
console.log(person.name.first)
person.message()

// Acessando propriedades do objeto pela notação de colchetes
console.log(person['name']['last'])
person['message']()

const product = {
    name: 'Smartphone',
    price: 1000
}

console.log(product.price)
product.price = 900 // alterando o valor da propriedade price
console.log(product.price)

const user = {
    id: 1,
    name: 'John Doe',
    // address: {
    //     city: 'New York',
    //     country: 'USA',
    //     geo: {
    //         lat: 40.7128,
    //         lng: -74.0060
    //     }
    // },
    message: function () {
        console.log(`Hello, my name is ${this.name}, I live in ${this.address.city}, ${this.address.country}`)
    }
}

console.log(user?.address?.city) // acessando propriedades aninhadas com o operador de encadeamento opcional (?.) - optional chaining

let content = null
console.log(content ?? 'content is null') // operador de coalescência nula (??) - nullish coalescing operator
                                          // retorna o valor da variável se ela não for null ou undefined, 
                                          // caso contrário, retorna o valor à direita do operador

// Criando objetos com a função construtora Object
function createProduct(name){
    const product = {}

    product.name = name
    product.details = function(){
        console.log(`Product: ${this.name}`)
    }

    return product
}

const product1 = new createProduct('Smartphone') // criando um objeto com a função construtora createProduct
product1.details()

function Person(name, age){
    this.name = name
    this.age = age
    this.message = function(){
        console.log(`Hello, my name is ${this.name}, I'm ${this.age} years old`)
    }
}

const person1 = new Person('John Doe', 30) // criando um objeto com a função construtora Person
person1.message()

