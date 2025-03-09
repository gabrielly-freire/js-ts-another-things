const USD = 5.5;
const EUR = 6.5;
const GBP = 7.5;

const form = document.querySelector('form');
const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const footer = document.querySelector('main footer');
const description = document.getElementById('description');
const result = document.getElementById('result'); 

console.log(amount.value);

amount.addEventListener('input', function () {
    const hasCaractersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCaractersRegex, '');
});

form.onsubmit = (event) => {
    event.preventDefault();
    const type = currency.value;
    const amountValue = amount.value;

    switch (type) {
        case 'USD':
            convertCurrency(amountValue, USD, '$');
            break;
        case 'EUR':
            convertCurrency(amountValue, EUR, '€');
            break;
        case 'GBP':
            convertCurrency(amountValue, GBP, '£');
            break;
        default:
            alert('Please select a currency');
    }
};

function convertCurrency(amount, price, symbol) {
    try {
        description.textContent = `${symbol} 1 = ${formatCurrency(price)}`;
        const total = formatCurrency(amount * price).replace("R$", "");
        result.textContent = `${total} Reais`;


        footer.classList.add('show-result');
    }catch (error) {
        footer.classList.remove('show-result');

        console.error('Error:', error);
        alert('An error occurred, please try again');
    }
}

function formatCurrency(value) {
    return Number(value).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}