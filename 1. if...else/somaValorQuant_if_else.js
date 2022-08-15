/* Autor: Archimedes
   Data: 19/05/2022
   Versão: 1.0
   Descrição: Exemplo introdutório if..else - extensão do código compra de produtos: valores e quantidades 
*/

/*Declaração das Variáveis Globais */
var inValor = document.getElementById("inValor");
var inQtd = document.getElementById("inQtd");
var btSomar = document.getElementById("btSomar");
var btZerar = document.getElementById("btZerar");
var outTotal = document.getElementById("outTotal");

/* Uso de uma variável acumuladora global
   Inicia com zero, pois ao carregar a aplicação
   não foram informados valor e quantidade de nenhum produto.
   Guarda o valor da soma anterior, para acrescentar o novo
   valor e quantidade informados pelo usuário.
*/
var soma = 0.0; 

function somarCompra () {
    /*Declaração das Variáveis Locais */
    var valorProduto = Number(inValor.value); //Lembre-se de converter para valor numérico
    var qntProduto = Number(inQtd.value);  //Lembre-se de converter para valor numérico
    
    if (inValor.value == "" || valorProduto <= 0){
        alert ("O campo de Valor foi deixado vazio ou está com valor inválido!");
        inValor.focus();
    } else {
        if(inQtd.value == "" || qntProduto <= 0){
            alert ("O campo de Quantidade foi deixado vazio ou está com valor inválido!");
            inQtd.focus();
        } else {
            soma += (valorProduto * qntProduto); // instrução equivalente a: soma = soma + (valorProduto * qntProduto)
            outTotal.textContent = "Total = R$" + soma;
        }
    }  
}
btSomar.addEventListener ("click", somarCompra);

function zerarCompra (){
    inValor.value = "";
    inValor.focus();
    inQtd.value = "";
    outTotal.textContent = "";

    soma = 0.0; //Lembre-se de zerar a variável acumuladora, para reiniciar a totalização na próxima compra
}
btZerar.addEventListener ("click", zerarCompra);