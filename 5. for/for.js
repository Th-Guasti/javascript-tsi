var inValor = document.getElementById("inValor");
var btOk = document.getElementById("btOk");
var outSaida = document.getElementById("outSaida");

function ok() {
    var valor = Number(inValor.value);
    var saida = "Sequência: "

    if (inValor.value == "" || inValor.value < 0) {
        alert("Campo vazio ou com valor inválido");
    } else {
        for (var cont = 0; cont < valor; cont++) {
            saida += cont + " ,";
        }
        outSaida.textContent = saida + valor + "."
    }
}
btOk.addEventListener("click", ok)