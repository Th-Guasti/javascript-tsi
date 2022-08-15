/*
Calculadora 
Autor: Wallison Dos Santos
Data:15/06/2022
Versão: 1.0
*/
//Variáveis Globais
var inOperacao = document.getElementById("inOperacao");
var operador1 = document.getElementById("operador1");
var operador2 = document.getElementById("operador2");
var btCalcular = document.getElementById("btCalcular");
var btLimpar = document.getElementById("btLimpar");
var outSaida = document.getElementById("outSaida");

function calcular() {
    var operacao = (inOperacao.value);
    var op1 = Number(operador1.value);
    var op2 = Number(operador2.value);
    var fatorial = 1;
    var saida = op1 + "! = ";

    if (operacao == "") {
        alert("O campo Operação foi deixado vazio!!");
        operacao.focus()
    } else {
    } if (op1 == ""){//} || op2 == "") {
        alert("O campo Operador 1 ou Operador 2 foi deixado vazio!!");
        op1.focus()
    } else {
    /*} if (op1 < 0 || op2 < 0) {
        alert("Algum dos Campos possui valor inválido");
        op1.focus()
    } else {
    */    switch (operacao) {
            case "+":
                outSaida.textContent = "O resultado é: " + (op1 + op2);
                break
            case "-":
                outSaida.textContent = "O resultado é: " + (op1 - op2);
                break
            case "*":
                outSaida.textContent = "O resultado é: " + (op1 * op2);
                break
            case "/":
                outSaida.textContent = "O resultado é: " + (op1 / op2).toFixed(2);
                break
            case "^": // ** usado para potenciação 
                outSaida.textContent = "O resultado é: " + (op1 ** op2).toFixed(2);
                break
            case "SQRT":
                outSaida.textContent = "O resultado é: " + (Math.sqrt(op1));
                break
            case "!":
                var aux = op1;
                var fatorial = 1;
                while (aux > 1) {
                    fatorial *= aux; // fatorial = fatorial * num;
                    aux--;
                }
                outSaida.textContent = "O resultado é: " + + fatorial;
        }
    }
}
btCalcular.addEventListener("click", calcular);

