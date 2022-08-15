/*  Descrição: Aplicação que lê um número (valida se é número inteiro > 0);
              Calcula e mostra a sequência de divisores do número, montando uma String;
              Verifica se o número é Perfeito (soma dos divisores é igual ao número)
    Versão: 1.0
*/

var inNum = document.getElementById("inNum");
var outDivisores = document.getElementById("outDivisores");
var outPerfeito = document.getElementById("outPerfeito");
var btVerificar = document.getElementById("btVerificar");

function verificarNumPerf() {
    var num = Number(inNum.value);
    var aux = 2;
    var somaDivisores = 1;
    var seqDivisores = "Divisores de " + num + ": 1";

    if (inNum.value == "" || num <= 0 || num != Math.floor(num)) {
        alert("Campo numérico deixado vazio ou com valor inválido!");
        inNum.focus();
    } else {
        while (aux <= num / 2) {
            if (num % aux == 0) {
                seqDivisores += ', ' + aux;
                somaDivisores += aux;
            }
            aux++;
        }
        outDivisores.textContent = seqDivisores + " (Soma Divisores = " + somaDivisores + ")";
        if (somaDivisores == num) {
            outPerfeito.textContent = num + "  é um Número Perfeito!";
        } else {
            outPerfeito.textContent = num + "  NÃO é um Número Perfeito!";
        }
    }
}
btVerificar.addEventListener("click", verificarNumPerf);