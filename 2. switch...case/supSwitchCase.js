/* Descrição: Aplicação Supermercado SwitchCase
              Calcula Descontos a partir do setor do produto e quantidade vendida
              Exercita o uso da estrutura switch..case
   Autor: Archimedes
   Data: 09/06/2022
   Versão: 01
*/
var inSetor = document.getElementById("inSetor");
var inPreco = document.getElementById("inPreco");
var inQuant = document.getElementById("inQuant");
var outVendaProduto = document.getElementById("outVendaProduto");
var outTotal = document.getElementById("outTotal");
var btVenda = document.getElementById("btVenda");
var btLimpa = document.getElementById("btLimpa");

var valorTotal = 0.0;

function calculoVendas() {
    var setor = inSetor.value;
    var preco = Number(inPreco.value);
    var quant = Number(inQuant.value);
    var desconto;

    if (inSetor.value == "") {
        alert("Campo Setor vazio!");
        inSetor.focus();
        outVendaProduto.textContent = "";
    } else {
        if (inPreco.value == "" || preco <= 0) {
            alert("Preço do produto vazio ou com valor inválidos!");
            inPreco.focus();
        } else {
            if (inQuant.value == "" || quant <= 0) {
                alert("Quantidade do produto vazio ou com valor inválidos!");
                inQuant.focus();
            } else {
                switch (setor){
                    case "Biscoitos":
                        desconto = 0;
                        if (quant >= 3 && quant <= 6){
                            desconto = 3;
                        } else if (quant > 6) {
                            desconto = 5;
                        }
                        break;

                    case "Bebidas":
                        desconto = 0;
                        if (quant >= 3 && quant <= 6){
                            desconto = 5;
                        } else if (quant > 6) {
                            desconto = 7;
                        }
                        break;

                    case "Carnes":
                        desconto = 0;
                        if (quant >= 3 && quant <= 6){
                            desconto = 7;
                        } else if (quant > 6) {
                            desconto = 9;
                        }
                        break;

                    default: //Outros setores
                        desconto = 0;
                        if (quant > 6){
                            desconto = 3;
                        }
                }

                valorCompra = (preco * quant) * (1 - desconto / 100);
                //Registrada Venda - Biscoitos - Desconto 5% - Valor = R$66.50
                //Registrada Venda - Diversos - Desconto 7% - Valor da Venda = R$93.00
                outVendaProduto.textContent = "Registrada Venda - " + setor + " - Desconto " + desconto + "% - Valor = R$" + valorCompra.toFixed(2);

                valorTotal += valorCompra;
                //Valor Total Vendas Registradas = R$159.50
                outTotal.textContent = "Valor Total Vendas Registradas = R$" + valorTotal.toFixed(2);
            }
        }
    }
}

btVenda.addEventListener("click", calculoVendas);


function limpar() {
    valorTotal = 0.0;
    rbBiscoito.checked = false;
    rbDiversos.checked = false;
    inPreco.value = "";
    inQuant.value = "";
    outVendaProduto.textContent = "";
    outTotal.textContent = "";
}

btLimpa.addEventListener("click", limpar);