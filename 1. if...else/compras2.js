//Nome: Thales
//Data: 21/05/2022
//Versão: 1.2
//Descrição: Código de soma da compra de produtos com valores e quantidades

//Variáveis GLOBAIS
var inValor = document.getElementById("inValor");
var inQnt = document.getElementById("inQnt");
var bSomar = document.getElementById("bSomar");
var bZerar = document.getElementById("bZerar");
var inResult = document.getElementById("inResult");
var soma = 0;

function somarCompra(){
    var valor = Math.abs (Number(inValor.value));
    var qnt = Math.abs (Number(inQnt.value));
    soma += (valor*qnt);
    inResult.textContent = "O valor da sua compra é R$: "+soma+".";
    inValor.value = valor;
    inQnt.value = qnt;
    inValor.focus();
}
bSomar.addEventListener ("click", somarCompra);

function zerarCompra(){
    inValor.value = "";
    inQnt.value = "";
    soma = 0;
    inResult.textContent = "Reinicie os cálculos da sua compra!";
}
bZerar.addEventListener ("click", zerarCompra);