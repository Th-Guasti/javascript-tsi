/*  Nome: Thales
    Data: 26/05/2022
    Versão: 1.0
    Descrição: Calculadora com soma, subtração, multiplicação, divisão e potenciação, com função de limpar calculo e função de continuar soma a partir do resultado, voltando para operando 1 com o valor da soma anterior
*/

//Declaração das variáveis globais
var inOpe1 = document.getElementById("inOpe1");
var rbMais = document.getElementById("rbMais");
var rbMenos = document.getElementById("rbMenos");
var rbMult = document.getElementById("rbMult");
var rbDiv = document.getElementById("rbDiv");
var rbPot = document.getElementById("rbPot");
var inOpe2 = document.getElementById("inOpe2");
var btCalcular = document.getElementById("btCalcular");
var btLimpar = document.getElementById("btLimpar");
var outCalculo = document.getElementById("outCalculo");

//Função para gerar resultado e voltar para operando 1
function calcular(){
    var op1 = Number (inOpe1.value);
    var op2 = Number (inOpe2.value);
    var resultado, msgSaida;

    if (inOpe1 == "") {
        alert ("Insira um valor no seu operando 1!");
        inOpe1.focus();
    } else { 
        if (inOpe2 == "") {
            alert ("Insira um valor no seu operando 2!");
            inOpe2.focus();
        } else {
            if (!rbMais.checked && !rbMenos.checked && !rbMult.checked && !rbDiv.checked && !rbPot.checked);
            alert ("Selecione o sinal da sua operação!");
            rbMais.checked == true;
            rbMais.focus()
        } else if (rbMais.checked) {
            resultado = op1 + op2;
            msgSaida = op1+"+"+op2+"="+resultado;
        } else if (rbMenos.checked) {
            resultado = op1 - op2;
            msgSaida = op1+"-"+op2+"="+resultado;
        } else if (rbMult.checked) {
            resultado = op1 * op2;
            msgSaida = op1+"*"+op2+"="+resultado;
        } else {
            if ()
        }
    }
}