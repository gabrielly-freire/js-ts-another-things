// definindo uma classe
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

}

const person = new Person("Maria", 30);
person.greet();
console.log(person);

// métodos estáticos
class User {
    static showMessage() {
        console.log("Hello, I'm a user");
    }
}

User.showMessage();

// Herança e polimorfismo
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Generic sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Au au");
    }
}

const dog = new Dog("Rex");
dog.makeSound();

// Prototype Chain - cadeia de protótipos - herança em JavaScript. Todos os objetos em JavaScript herdam de Object.prototype.
// Tem uma cadeia enorme de herança, até que chega em Object.prototype, que é o último da cadeia.
const address = {
    street: "Rua 1",
    number: 123
}

console.log(address.__proto__); // Object.prototype