/*  Descrição: Aplicação que lê dois valores,
    o valor de X um número inteiro e X <= Y
    o valor de Y um número inteiro e Y >= X (validar).
    A aplicação deve mostrar a sequência de números pares entre X e Y (incluindo X e Y).
    Autor: Archimedes
    Data: 30/06/2022
    Versão: 1.0
*/

var inNumX = document.getElementById("inNumX");
var inNumY = document.getElementById("inNumY");
var outSaida = document.getElementById("outSaida");
var btMostrarSeq= document.getElementById("btMostrarSeq");

function calcularSomatorio(){
    var numX = Number (inNumX.value);
    var numY = Number (inNumY.value);
    var aux;
    var sequenciaPares = "Sequência de Pares entre " +  numX + " e " + numY + " => ";

    if(inNumX.value == "" || numX != Math.floor(numX)){
        alert ("Valor de X deixado vazio ou com valor inválido!");
        inNumX.value = "";
        inNumX.focus();
    } else {
        if(inNumY.value == "" || numY < numX || numY != Math.floor(numY)){
            alert ("Valor de Y deixado vazio ou com valor inválido!");
            outSaida.textContent = "";
            inNumY.value = "";
            inNumY.focus();
        } else {
            /* o primeiro valor par da sequência é:
                 - (numX + 1), se numX for um valor ímpar e numX < numY;
                 - numX, se numX é um valor par. 
            */
            if (numX % 2 != 0){ // se numX é um valor ímpar
                if (numX < numY){
                    sequenciaPares += numX + 1;
                    aux = numX + 3; //aux é inicializado com o próximo valor par
                }
            } else { //se numX é um valor par
                sequenciaPares += numX;
                aux = numX + 2; //aux é inicializado com o próximo valor par
            }

            while(aux <= numY){
                sequenciaPares += ", " + aux;
                aux += 2; 
            }
            outSaida.textContent = sequenciaPares;
        }
    }
}
btMostrarSeq.addEventListener("click", calcularSomatorio);