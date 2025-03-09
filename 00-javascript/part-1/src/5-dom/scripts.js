console.log(document.title); // obtem o titulo da pagina

const guest = document.getElementById('guest-2'); // obtem o elemento com o id guest-1
console.log(guest); 

console.dir(guest); // exibe todas as propriedades do elemento

const guests = document.getElementsByClassName('guest'); // obtem todos os elementos com a classe guest
console.log(guests);

console.log(guests[0]); // exibe o primeiro elemento com a classe guest
console.log(guests.item(1)); // exibe o segundo elemento com a classe guest

const guestList = document.getElementsByTagName('li'); // obtem todos os elementos li
console.log(guestList);

const guest2 = document.querySelector('#guest-1 span'); // obtem o elemento com o id guest-2
const guest3 = document.querySelector('.guest'); // obtem o primeiro elemento com a classe guest
const guest4 = document.querySelectorAll('.guest'); // obtem todos os elementos com a classe guest
console.log(guest2);

console.log(guest2.textContent); // exibe o texto do elemento
guest2.textContent = 'Novo texto'; // altera o texto do elemento

console.log(guest2.innerHTML); // exibe o html do elemento 

// innerHTML vs textContent - o innerHTML exibe o html do elemento, enquanto o textContent exibe o texto do elemento