var inValor = document.getElementById("inValor");
var inValor2 = document.getElementById("inValor2")
var btOk = document.getElementById("btOk");
var outSaida = document.getElementById("outSaida");

function ok() {
    var valor = Number(inValor.value);
    var valor2 = Number(inValor2.value);
    var saida = "Sequência: "

    if (inValor.value == "" || inValor.value < 0) {
        alert("Campo vazio ou com valor inválido");
    } else {
        for (var cont = valor; cont < valor2; cont++) {
            saida += cont + " ,";
        }
        outSaida.textContent = saida + valor2 + "."
    }
}
btOk.addEventListener("click", ok);