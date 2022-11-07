let amountElement = document.querySelector(".js-amount")
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form")
let resultElement = document.querySelector(".js-result");

let EUR = 4.7101;
let USD = 4.8291;
let GBP = 5.4330;
let CHF = 4.7697;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;

        case "USD":
            result = amount / USD;
            break;

        case "GBP":
            result = amount / GBP;
            break;

        case "CHF":
            result = amount / CHF;
    }

    resultElement.innerText = `${amountElement.value} PLN = ${result.toFixed(
        2
    )} ${currency}`;
});

formElement.addEventListener("reset", () => {
    resultElement.innerText = "";
});