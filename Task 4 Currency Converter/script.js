const exchangeRates = {
    USD: { EUR: 0.85, GBP: 0.73, INR: 73.54 },
    EUR: { USD: 1.18, GBP: 0.85, INR: 86.52 },
    GBP: { USD: 1.37, EUR: 1.17, INR: 100.87 },
    INR: { USD: 0.014, EUR: 0.012, GBP: 0.0099 }
};


function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }
    
    if (fromCurrency === toCurrency) {
        alert("Select different currencies to convert.");
        return;
    }

    const result = amount * exchangeRates[fromCurrency][toCurrency];
    document.getElementById('result').value = result.toFixed(2);
}
