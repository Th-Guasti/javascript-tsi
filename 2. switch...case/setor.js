var inSetor = document.getElementById("inSetor");
var inPreco = document.getElementById("inPreco");
var inQnt = document.getElementById("inQnt");
var btRegistro = document.getElementById("btRegistro");
var outSaida = document.getElementById("outSaida");
var outSaida2 = document.getElementById("outSaida2");

var valorTotal = 0;

function registrar() {
    var setor = inSetor.value;
    var preco = Number(inPreco.value);
    var qnt = Number(inQnt.value);
    var desconto;

    if (inSetor.value == "") {
        alert("Insira o setor!");
        inSetor.focus();
        outSaida.textContent = "";
        outSaida2.textContent = "";
    } else {
        if (inPreco.value == "" || inPreco.value <= 0) {
            alert("Insira um valor (acima de 0) para calcular o desconto!");
            inPreco.focus();
        } else {
            if (inQnt.value == "" || inQnt.value <= 0) {
                alert("Insira a quantidade do produto escolhido (sendo maior que 0)!")
                inQnt.focus();
            } else {
                switch (setor) {
                    case "Biscoitos":
                        desconto = 0;
                        if (qnt >= 3 && qnt <= 6) {
                            desconto = 3;
                        } else if (qnt > 6) {
                            desconto = 5;
                        }
                        break;

                    case "Bebidas":
                        desconto = 0;
                        if (qnt >= 3 && qnt <= 6) {
                            desconto = 5;
                        } else if (qnt > 6) {
                            desconto = 7;
                        }
                        break;

                    case "Carnes":
                        desconto = 0;
                        if (qnt >= 3 && qnt <= 6) {
                            desconto = 7;
                        } else if (qnt > 6) {
                            desconto = 9;
                        }
                        break;

                    default:
                        desconto = 0;
                        if (qnt > 6) {
                            desconto = 3;
                        }
                }

                valorCompra = (preco * qnt) * (1 - desconto / 100);
                outSaida.textContent = "Registrada Venda - " + setor + " - Desconto " + desconto + "% - Valor = R$" + valorCompra.toFixed(2);

                valorTotal += valorCompra;
                outSaida2.textContent = "Valor Total Vendas Registradas = R$" + valorTotal.toFixed(2);
            }
        }
    }
}

btRegistro.addEventListener("click", registrar)