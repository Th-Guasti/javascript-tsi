/*  Descrição: Aplicação que lê um número (valida se é número inteiro >= 0)
              Calcula e mostra o fatorial do número, montando uma String que 
              demonstra a sequência da multiplicação calculada.
    Autor: Archimedes
    Data: 20/06/2022
    Versão: 2.0
        - Última alteração: acréscentou String com a sequência da multiplicação.
*/

var inNum = document.getElementById("inNum");
var outSaida = document.getElementById("outSaida");
var btCalcular= document.getElementById("btCalcular");

function mostrarSeqDecr(){
    var num = Number (inNum.value);
    var fatorial = 1;
    var saida = num + "! = ";

    if(inNum.value == "" || num < 0 || num != Math.floor(num)){
        alert ("Campo numérico deixado vazio ou com valor inválido!");
    } else {
        
        while(num > 1){
            fatorial *= num; // fatorial = fatorial * num;
            saida += num + " * ";
            num --;
        }
        outSaida.textContent = saida + " 1 = " + fatorial;
    }

}
btCalcular.addEventListener("click", mostrarSeqDecr);