var inNum = document.getElementById("inNum");
var outSaida = document.getElementById("outSaida");
var btVerificar = document.getElementById("btVerificar");

function verificar() {
    var num = Number(inNum.value);

    if (inNum.value == "" || num <= 0 || num != Math.floor(num)) {
        alert("Campo numérico deixado vazio ou com valor inválido!");
        inNum.focus();
    } else {
        var divisor = 2; //começa de 2, pois qualquer número é divisível por 1;
        var ehPrimo = true; //flag (inicializador de que o número é primo);
        while (divisor < num && ehPrimo) { //= N-1 (divisor <= num - 1) | para saber se o número anterior ao num é divisível por ele;
            if (num % divisor == 0) { 
                ehPrimo = false;
            }
            divisor++
        }
        if (ehPrimo) {
            outSaida.textContent = num + " é um número primo!";
            inNum.focus();
            inNum.value = "";
        } else {
            outSaida.textContent = num + " não é um número primo!";
            inNum.focus();
            inNum.value = "";
        }
    }
}
btVerificar.addEventListener("click", verificar);