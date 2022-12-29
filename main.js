document.addEventListener("DOMContentLoaded", () => {
    
    document.querySelector("#currency-converter").addEventListener("submit", (event) => {
        event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("apikey", "meDoxX27jHz4nS0FFdIMDJHw6JcOHmPo");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders
    };

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.value}`, requestOptions)
    .then(response => response.json())
    .then(data => {

        let {info, date, query: { from, to, amount }, result} = data;
        document.querySelector(".rate").textContent = `1 ${from} = ${info.rate} ${to}`
        document.querySelector(".result").textContent = `${amount} ${from} = ${result} ${to}`   
    });

    });
});