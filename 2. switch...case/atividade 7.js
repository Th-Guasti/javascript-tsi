/* Projeto Estações e suas Frutas
Autor: Thales De Souza Guasti
Versão: 3.0
Data: 16/06/2022
*/

var inEstacao = document.getElementById("inEstacao");
var btExibir = document.getElementById("btExibir");
var outSaida = document.getElementById("outSaida");

function exibir(){
    var estacao = inEstacao.value;

    switch(estacao){
        case "verao" || "verão" || "Verao" || "Verão":
            outSaida.textContent = "Frutas da Estação (Verão): limão, acerola, ameixa, melão e melancia.";
        break
            case "outono" || "Outono":
                outSaida.textContent = "Frutas da Estação (Outono): abacate, kiwi, pêssego e romã.";
        break
            case "inverno" || "Inverno":
                outSaida.textContent = "Frutas da Estação (Inverno):  morango, caqui e uva. "; 
        break
            case "primavera" || "Primavera":
                outSaida.textContent = outSaida.textContent = "Frutas da Estação (Primavera):  abacaxi, jabuticaba, manga e pitanga"; 
        break           
        default:
            alert("Insira, corretamente, o nome da estação!") 
        break
    }
}
btExibir.addEventListener("click", exibir);