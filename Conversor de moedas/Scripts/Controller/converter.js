function collectData(){
    var currencyA = document.getElementById("moeda-atual").value
    var currencyB = document.getElementById("moeda-convertida").value
    var userInput = document.getElementById("user-input").value

    let currencyForCurrency = `${currencyA}_${currencyB}`
    const apiKey = '724e561425abfdc72b98'

    let url = `https://free.currconv.com/api/v7/convert?q=${currencyForCurrency}&compact=ultra&apiKey=${apiKey}`


    fetch(url)
    .then(res =>{
        return res.json();
    })
    .then(json =>{
        var cotacao = json[currencyForCurrency];
        
        let result = (cotacao * parseFloat(userInput)).toFixed(2);
        var hResult = document.getElementById("value-result");
        hResult.innerHTML = `$${result}`;
    
 })
}


   
    


