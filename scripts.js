// console.log("Script carregado com sucesso!");
const convertButton = document.querySelector("#convertButton");
const currencyToConvertSelect = document.querySelector(".currency-to-convert-input");
const targetCurrencySelect = document.querySelector(".target-currency-input");

currencyToConvertSelect.addEventListener("change", function () {

    const currencyToConvertImg = document.querySelector("#currency-to-convert-img");
    const currencyToConvertLabel = document.querySelector(".currency-label");

    switch (currencyToConvertSelect.value) {
        case 'BRL':
            currencyToConvertImg.src = "./assets/brasil 2.png";
            currencyToConvertLabel.innerText = "Real Brasileiro";
            break;
        case 'USD':
            currencyToConvertImg.src = "./assets/estados-unidos (1) 1.png";
            currencyToConvertLabel.innerText = "Dólar Americano";
            break;
        case 'EUR':
            currencyToConvertImg.src = "./assets/Design sem nome 3.png";
            currencyToConvertLabel.innerText = "Euro";
            break;
        case 'GBP':
            currencyToConvertImg.src = "./assets/libra 1.png";
            currencyToConvertLabel.innerText = "Libra Esterlina";
            break;
        case 'BTC':
            currencyToConvertImg.src = "./assets/bitcoin 1.png";
            currencyToConvertLabel.innerText = "Bitcoin";
            break;
    }

    convertCurrency();
});

targetCurrencySelect.addEventListener("change", function () {
    const targetCurrencyImg = document.querySelector("#currency-converted-img");
    const targetCurrencyLabel = document.querySelector(".converted-currency-label");

    switch (targetCurrencySelect.value) {
        case 'BRL':
            targetCurrencyImg.src = "./assets/brasil 2.png";
            targetCurrencyLabel.innerText = "Real Brasileiro";
            break;
        case 'USD':
            targetCurrencyImg.src = "./assets/estados-unidos (1) 1.png";
            targetCurrencyLabel.innerText = "Dólar Americano";
            break;
        case 'EUR':
            targetCurrencyImg.src = "./assets/Design sem nome 3.png";
            targetCurrencyLabel.innerText = "Euro";
            break;
        case 'GBP':
            targetCurrencyImg.src = "./assets/libra 1.png";
            targetCurrencyLabel.innerText = "Libra Esterlina";
            break;
        case 'BTC':
            targetCurrencyImg.src = "./assets/bitcoin 1.png";
            targetCurrencyLabel.innerText = "Bitcoin";
            break;
    }

    convertCurrency();
});

function convertCurrency() {

    const baseCurrency = document.querySelector(".currency-to-convert-input").value;
    const targetCurrency = document.querySelector(".target-currency-input").value;
    const amountToConvert = parseFloat(document.querySelector("#input-value-to-convert").value);

    const exchangeRates = {
        "BRL": { "USD": 0.20, "EUR": 0.18, "GBP": 0.16, "BTC": 0.0000043 },
        "USD": { "BRL": 5.00, "EUR": 0.90, "GBP": 0.80, "BTC": 0.000021 },
        "EUR": { "BRL": 5.50, "USD": 1.11, "GBP": 0.88, "BTC": 0.000023 },
        "GBP": { "BRL": 6.20, "USD": 1.25, "EUR": 1.14, "BTC": 0.000026 },
        "BTC": { "BRL": 230000.00, "USD": 43000.00, "EUR": 39000.00, "GBP": 34000.00 }
    };

    let convertedAmount = 0;

    if (baseCurrency === targetCurrency) {
        convertedAmount = amountToConvert;
    } else {
        const rate = exchangeRates[baseCurrency][targetCurrency];
        convertedAmount = amountToConvert * rate;
    }

    let targetCurrencyLanguage

    switch (targetCurrency) {

        case 'BRL':
            targetCurrencyLanguage = 'pt-BR';
            break;
        case 'USD':
            targetCurrencyLanguage = 'en-US';
            break;
        case 'EUR':
            targetCurrencyLanguage = 'de-DE';
            break;
        case 'GBP':
            targetCurrencyLanguage = 'en-GB';
            break;
        case 'BTC':
            targetCurrencyLanguage = 'en-US';
            break;

        default:
            targetCurrencyLanguage = 'en-US';
    }

    let baseCurrencyLanguage

    switch (baseCurrency) {

        case 'BRL':
            baseCurrencyLanguage = 'pt-BR';
            break;
        case 'USD':
            baseCurrencyLanguage = 'en-US';
            break;
        case 'EUR':
            baseCurrencyLanguage = 'de-DE';
            break;
        case 'GBP':
            baseCurrencyLanguage = 'en-GB';
            break;
        case 'BTC':
            baseCurrencyLanguage = 'en-US';
            break;
        default:
            baseCurrencyLanguage = 'en-US';

    }

    document.querySelector(".converted-value").innerText = new Intl.NumberFormat(targetCurrencyLanguage, { style: 'currency', currency: targetCurrency }).format(convertedAmount);
    document.querySelector(".value-to-convert").innerText = new Intl.NumberFormat(baseCurrencyLanguage, { style: 'currency', currency: baseCurrency }).format(amountToConvert);
}



convertButton.addEventListener("click", convertCurrency);