/*  Descrição: Aplicação que lê dois valores,
    o valor de X um número real e
    o valor de N um inteiro maior ou igual a zero (validar).
    A aplicação deve usar esses valores para calcular e mostrar o resultado
    de um somatório:
    S = ( X**0 / 0! ) - ( X**1 / 1! ) + ( X**2 / 2! ) - ( X**3 / 3! ) + ... ( X**(N-1) / (N-1)! ) ±  ( X**N / N! ).
    Autor: Archimedes
    Data: 21/06/2022
    Versão: 1.0
*/

var inNumX = document.getElementById("inNumX");
var inNumN = document.getElementById("inNumN");
var outSaida = document.getElementById("outSaida");
var btCalcular= document.getElementById("btCalcular");

function calcularSomatorio(){
    var x = Number (inNumX.value);
    var n = Number (inNumN.value);
    var somatorio = 1;
    var saida = "Somatório = (" + x + "**0 / 0!)";

    if(inNumX.value == ""){
        alert ("Valor de X deixado vazio!");
    } else {
        if(inNumN.value == "" || n < 0 || n != Math.floor(n)){
            alert ("Valor de N deixado vazio ou com valor inválido!");
        } else {
            var aux = 1;
            var fatorial = 1;
            while(aux <= n){
                fatorial *= aux;
                somatorio += ((-x) ** aux) / (fatorial);
                saida += (aux % 2 == 0) ? 
                         " + (" + x + "**" + aux + " / " + aux + "!)"
                        :" - (" + x + "**" + aux + " / " + aux + "!)";
                aux ++; 
            }
            outSaida.textContent = saida + " = " + somatorio;
        }
    }
}
btCalcular.addEventListener("click", calcularSomatorio);