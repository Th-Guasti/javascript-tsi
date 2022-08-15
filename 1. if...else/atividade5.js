/* Autor: Thales
   Data: 23/05/2022
   Versão: 3.0
   Descrição: Calcular a soma dos produtos e o terceiro sair por 50% do valor
*/

//Declaração das Variáveis Globais
var inProduto = document.getElementById("inProduto");
var inPreco = document.getElementById("inPreco");
var btPromocao = document.getElementById("btPromocao");
var outPromocao = document.getElementById("outPromocao");
var outProduto3 = document.getElementById("outProduto3");

//Função que vai gerar o cálculo da promoção 
function promoCompra(){
    //Declaração das variáveis locais
    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    //Condições para que o produto esteja com o nome e o valor inserido e corretamente
    if (produto == ""){
        alert ("Insira o nome do produto para concluir o cáculo do seu desconto!");
        produto.focus();
    } else {
        if(preco == "" || preco < 0){
            alert ("Insira o valor do produto para concluir o cálculo do seu desconto!");
            preco.focus();
        } else {
            soma = (preco * 3)-(preco/2);
            promocao = preco/2; 
            outPromocao.textContent = produto+" - Promoção: Leve 3 por R$: "+soma;
            outProduto3.textContent = "O 3º produto custa apenas R$: "+promocao;
        }
    }
}
//Botão de ver promoção irá funcionar a partir
btPromocao.addEventListener("click", promoCompra);