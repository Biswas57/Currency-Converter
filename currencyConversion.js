document.addEventListener('DOMContentLoaded', function() {
    const amount = document.getElementById('amount');
    const currencyInput = document.getElementById('currency-input');
    const currencyOutput = document.getElementById('currency-output');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    const apiKey = "VDlMICBKK4L43AqqCFjXsw==7F9tChAgKHink0MT";

    convert.addEventListener('click', () => {
        const amountTotal = parseFloat(amount.value);
        const currencyFrom = currencyInput.value;
        const currencyTo = currencyOutput.value;

        if (isNaN(amountTotal)) {
            console.log("Amount is not a valid number");
            return;
        }

        const apiURL = `https://api.api-ninjas.com/v1/exchangerate?pair=${currencyTo}_${currencyFrom}`;

        console.log(`Converting ${amountTotal} ${currencyFrom} to ${currencyTo}`);
        
        fetch(apiURL, {
            headers: {
                'X-API-KEY': apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("Received data", data);
            const rate = data.exchange_rate;
            const resultPrice = amountTotal / rate;
            result.value = `${amountTotal} ${currencyFrom} = ${resultPrice.toFixed(2)} ${currencyTo}`;
        })
        .catch(error => {
            console.error('Request failed', error);
            result.value = 'Error occurred, please try again later';
        });
    });
});
