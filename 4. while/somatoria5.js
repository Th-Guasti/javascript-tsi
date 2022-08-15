/*
S = (X**0 / 1) - (X**1 / 3) + (X**2 / 9) - (X**3 / 27) + ... ± (X**N / 3**N)
*/
var inNumber1 = document.getElementById("inNumber1");
var inNumber2 = document.getElementById("inNumber2");

var btCalcular = document.getElementById("btCalcular");
var outSaida = document.getElementById("outSaida");


function calcular() {

    var x = Number(inNumber1.value);
    var n = Number(inNumber2.value);

    var expoente = 1;
    var somatorio = 1;
    var denominador = 1;
    var numerador;
    var saida = "Somatório:<br>"+
                "(" + x + "**0 / 3**0)";

    if (inNumber1.value == "") {
        alert(" O Campo X está em Branco!");
        inNumber1.focus();
    } else {
        if (n < 0 || inNumber2.value == "" || n != Math.floor(n)) {
            alert("O Valor do Campo n é Invalído");
            inNumber2.focus();
        } else {

            while (expoente <= n) {
                numerador  = (Math.pow(-x, expoente));
                somatorio += (numerador) / (denominador);
                
                denominador *= 3;
                saida += (expoente % 2 == 0) ? 
                         "<br>+ (" + x + "**" + expoente + " / " + denominador +")"
                        :"<br>- (" + x + "**" + expoente + " / " + denominador +")";
                expoente ++;
            }
            outSaida.innerHTML = saida + "<br>= " + somatorio;
        }
    }
}
btCalcular.addEventListener("click", calcular);