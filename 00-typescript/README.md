# TypeScript

O typescript surge como um superset do JavaScript, ou seja, ele é um JavaScript com super poderes. Ele adiciona funcionalidades que o JavaScript não possui, como tipagem estática, interfaces, enums, decorators, generics, entre outros.

No final ele é transpilado para JavaScript puro, ou seja, o código que escrevemos em TypeScript é convertido para JavaScript. Assim, a "linguagem" tem a finalidade de ajudar o desenvolvedor a escrever um código mais robusto e seguro. 

## Vantagens

- Feedback mais rápido de erros;
- Antecipa erros que seriam visto em execução;
- Ajuda a manter o código mais limpo e organizado;
- O processo de refatoração é mais fácil e seguro;
- Melhores recursos de autocomplete;
- Pode ser adotado gradualmente em projetos existentes. 

## Tipos de dados

- number
- string
- boolean
- any
- null
- underfined
- object
- void 

```typescript
let age: number = 10;
let name: string = 'Anne';
let isStudent: boolean = true;
```

### Inferência de tipos

```typescript
let age = 10; // number
let name = 'Anne'; // string
let isStudent = true; // boolean
```

### Tipo `any`

```typescript
let var1: any
let var2 // por default é any


// não é uma boa prática
var1 = 10
var1 = 'Anne'
var1 = true
```

### Arrays

```typescript
let fruits: string[] = ['apple', 'banana', 'orange'];
let numbers: number[] = [1, 2, 3];
let values: any[] = [1, 'Anne', true]; // não é uma boa prática
```

### Funções

```typescript
function sum(a: number, b: number): number {
  return a + b;
}

const subtract = (a: number, b: number): number => {
  return a - b;
}

```
### Objetos

```typescript
// ? indica que o atributo é opcional
let person: { name: string, age: number, isStudent: boolean, photoUrl?: String } = {
  name: 'Anne',
  age: 10,
  isStudent: true
};

function printPerson(person: { name: string, age: number, isStudent: boolean }) {
  console.log(person.name);
  console.log(person.age);
  console.log(person.isStudent);
}
```

### underfined e null

```typescript
let value:string // underfined, pois não foi atribuído um valor

let user = {
    name: 'Anne'
}

console.log(user.age) // underfined, pois o atributo age não existe no objeto user

let age:number = null // null, pois foi atribuído um valor nulo, ou seja, é a ausência de valor intencional
```

### Union types

```typescript
let response: string | null | number

response = 'Anne'
response = 10
response = null
```

## Tipos personalizados

```typescript
interface Product {
  id: number,
  name: string,
  price: number
}

```

### Estendendo interfaces

```typescript
interface Person {
  id: number,
  name: string,
  age: number
}

interface Teacher extends Person {
  subject: string[]
}

interface Student extends Person {
  age: number
}
```

### Type alias

```typescript
type Product = {
  id: number,
  name: string,
  price: number
}

function printProduct(product: Product) {
  console.log(product.id);
  console.log(product.name);
  console.log(product.price);
}

printProduct({ id: 1, name: 'Book', price: 10 });

type selectedProduct = Product[] | null // união de tipos
```

### Interseção de tipos

```typescript
type Person = {
  id: number,
  name: string,
}

type Teacher = Person & {
  subject: string[]
}

type Student = Person & {
  age: number
}
```

### Comparação entre interfaces e type alias

- Interfaces podem ser sobrescritas, assim é possivel adicionar novos atributos (cria uma nova interface e junta com os atributos da interface)
- Fazem a mesma coisa com sintaxes diferentes

### Asserção de tipos

```typescript
type UserResponse = {
  id: number,
  name: string,
  age: number
}

let userResponse = {} as UserResponse; // asserção de tipos - casting
```

### Restringindo valores

```typescript
type Size = 'small' | 'medium' | 'large'

let size: Size = 'small'
```

### Enums

```typescript
enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

let size: Size = Size.Small
```

### Generics

```typescript
/**
 * S => State
 * T => Type
 * R => Result
 * K => Key
 * V => Value
 * E => Element
 **/
function print<T>(value: T): T {
  console.log(value);
  return value;
}

// define o tipo caso não seja passado 
function print2<T as extends number | string = string>(value: T): T {
  console.log(value);
  return value;
}

print<string>('Anne');
print<number>(10);
```

## Utilitários do TypeScript

### Partial

```typescript
interface Product {
  id: number,
  name: string,
  price: number,
  description?: string // atributo opcional
}

const product: Product = {
  id: 1,
  name: 'Book',
  price: 10
}

const product2: Partial<Product> = {
  id: 1,
  name: 'Book',
}
```

### Pick

```typescript
interface Product {
  id: number,
  name: string,
  price: number,
}

const product: Pick<Product, 'name' | 'price'> = {
  name: 'Book',
  price: 10
}
```

### Omit

```typescript
interface Product {
  id: number,
  name: string,
  price: number,
}

const product: Omit<Product, 'id'> = {
  name: 'Book',
  price: 10
}
```

### Record

```typescript
const scores: Record<string, number> = {
  Anne: 10,
  John: 20
}
```

### Typeof

```typescript
const person = {
  name: 'Anne',
  age: 10
}

type Person = typeof person
```

### Keyof

```typescript
const icons = {
  home: './path/home',
  settings: './path/settings'
}

type Icon = typeof icons

const icon: keyof Icon = 'home'
```
