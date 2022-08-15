var inNum = document.getElementById("inNum");
var outSaida = document.getElementById("outSaida");
var btOk = document.getElementById("btOk");
var vetNum = [];

function insereVetor() {
    if (inNum.value == "") {
        alert("Insira o nome de um jogador!")
        inNomes.focus();
    } else {
        num = inNum.value;
        vetNum.push(num);
        inNum.focus;
        inNum.value = " ";
        outSaida.textContent = vetNum.
}