var inNum = document.getElementById("inNum");
var outSaida = document.getElementById("outSaida");
var outSoma = document.getElementById("outSoma");
var btVerificar = document.getElementById("btVerificar");

function mostrarFibo (){
    var num = Number (inNum.value);
    var ultimo = 1;
    var penultimo = 1;
    var saida = "Sequência de Fibonacci: 1";
    var soma = 0;
    var aux = 0;

    if (inNum.value == "" || num <= 0 || num != Math.floor(num)) {
    alert ("Preencha o campo corretamente!");
    inNum.focus();
    
    } else {
        var cont = 2;
        
        while (cont <= num) {
            saida += ", " + ultimo;
            soma += ultimo;
            aux = penultimo + ultimo;
            penultimo = ultimo;
            ultimo = aux
            cont ++;
        }
        outSaida.textContent = saida;
        outSoma.textContent = "A soma dos termos é " + (1 + soma);
    } 
}
btVerificar.addEventListener("click", mostrarFibo);