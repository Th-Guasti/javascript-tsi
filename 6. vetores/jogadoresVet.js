var inNomes = document.getElementById("inNomes");
var outSaida = document.getElementById("outSaida");
var btOk = document.getElementById("btOk");
var btRemove = document.getElementById("btRemove");
var btEscolhe = document.getElementById("btEscolhe");
var vetNomes = [];

function jogadores() {
    if (inNomes.value == "") {
        alert("Insira o nome de um jogador!")
        inNomes.focus();
    } else {
        nomes = inNomes.value;
        vetNomes.push(nomes);
        inNomes.focus();
        inNomes.value = "";
        outSaida.textContent = vetNomes.join("\n");
    }
}
function removeDor() {
    if (confirm("Tem certeza disso meu jovem?")) {
        inNomes.value = "";
        vetNomes.pop();
        outSaida.textContent = vetNomes.join("\n");
    }
}
function escolhe() {
    if (inNomes.value == "") {
        alert("Qual jogador você deseja remover?")
    }
    for (var ind = 0; ind < vetNomes.length; ind++) {
        nomes = inNomes.value;
        if (vetNomes[ind] == nomes) {
            vetNomes[ind] = vetNomes[vetNomes.length - 1];
            vetNomes.pop();
            outSaida.textContent = vetNomes.join("\n");
        }
    }
}
btOk.addEventListener("click", jogadores);
btRemove.addEventListener("click", removeDor);
btEscolhe.addEventListener("click", escolhe);