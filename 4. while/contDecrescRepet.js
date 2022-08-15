var inNum = document.getElementById("inNum");
var outSaida = document.getElementById("outSaida");
var btMostrar= document.getElementById("btMostrar");

function mostrarSeqDecr(){
    var num = Number (inNum.value);
    var cont,
        saida = "Sequência Decrescente: "

    if(inNum.value == "" || num <= 0 || num != Math.floor(num)){
        alert ("Campo numérico deixado vazio ou com valor inválido!");
    } else {
        /*cont = num;
        while(cont >= 0){
            saida += cont > 0 ? cont + ' , ' : cont + ' .';
            cont --; //cont -=1 ou cont = cont - 1
        }*/
        saida += num;
        cont = num - 1;
        while(cont >= 0){
            saida += " , " + cont;
            cont --;
        }
        outSaida.textContent = saida + ".";
    }

}
btMostrar.addEventListener("click", mostrarSeqDecr);