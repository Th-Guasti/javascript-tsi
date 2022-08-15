var inNumero = document.getElementById("inNumero");
var btPar = document.getElementById("btPar");
var outSaida = document.getElementById("outSaida");

function parimpar() {
    var num = Number(inNumero.value);

    outSaida.textContent = num + ((num % 2 == 0) ? " é par!" : " é ímpar");
    inNumero.value = "";
    inNumero.focus();
}

btPar.addEventListener("click", parimpar);