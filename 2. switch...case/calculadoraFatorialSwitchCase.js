var inOperacao = document.getElementById("inOperacao");
var inOp1 = document.getElementById("inOp1");
var inOp2 = document.getElementById("inOp2");
var btCalcular = document.getElementById("btCalcular");
var btLimpar = document.getElementById("btLimpar");
var outSaida = document.getElementById("outSaida");

function calcular() {
    var operacao = inOperacao.value;
    var op1 = Number(inOp1.value);
    var op2 = Number(inOp2.value);
    var calcular;

    if (operacao == "") {
        alert("Digite o tipo de operação, como o informado!");
        inOperacao.focus();

    } else {
        if (op1 == "") {
            alert("Digite seu operando 1!");
            inOp1.focus();

        } else if (op2 == "") {
            alert("Digite seu operando 2!");
            inOp2.focus();

        } else if (operacao == "/" && op2 == 0) {
            alert("Não é possível fazer divisão por 0!");

        } else if (operacao == "^" && op2 < 0) {
            alert("Não é possível fazer potenciação com expoente negativo!");
        } else {
            switch (operacao) {
                case "+":
                    calcular = op1 + op2;
                    inOperacao.focus();
                    break;
                case "-":
                    calcular = op1 - op2;
                    inOperacao.focus();
                    break;
                case "*":
                    calcular = op1 * op2;
                    inOperacao.focus();
                    break;
                case "/":
                    calcular = op1 / op2;
                    inOperacao.focus();
                    break;
                case "^":
                    calcular = op1 ** op2;
                    inOperacao.focus();
                    break;
                case "SQRT":
                case "sqrt":
                    if (op1 <= 0) {
                        alert("Não é possível realizar raiz quadrada com expoente negativo!");
                        inOp1.focus();
                        inOp1.value = "";
                        outSaida.textContent = "";
                    } else {
                        calcular = Math.sqrt(op1);
                        outSaida.textContent = "SQRT(" + op1 + ")" + " = " + calcular;
                    }
                    break;
                case "!":
                    var fatorial = 1;
                    fatorial *= num; // fatorial = fatorial * num;
                    saida += num + " * ";
                    num--;
            }
            if (operacao != "sqrt" && operacao != "SQRT") {
                outSaida.textContent = op1 + " " + operacao + " " + op2 + " = " + calcular;
            }
        }
    }
}

btCalcular.addEventListener("click", calcular);

function limpar() {
    inOperacao.value = "";
    inOp1.value = "";
    inOp2.value = "";
    outSaida.textContent = "";
    inOperacao.focus();
}

btLimpar.addEventListener("click", limpar);