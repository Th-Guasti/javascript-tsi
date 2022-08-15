//Nome: Thales de Souza Guasti
//Data: 25/05/2022
//Versão: 1.0
//IMC

var inAltura = document.getElementById("inAltura");
var inMassa = document.getElementById("inMassa");
var btCalcular = document.getElementById("btCalcular");
var outSaida = document.getElementById("outSaida");

function calcular () {
    var altura = Number (inAltura.value);
    var massa = Number (inMassa.value);
    var imc;
    imc = massa/(altura*altura);

    if (imc < 18.5) {
        outSaida.textContent = "Seu IMC indica que você está abaixo do peso ("+imc.toFixed(1)+")!";
    } else if (imc >= 18.5 && imc < 25) {            
        outSaida.textContent = "Seu IMC indica que seu peso é normal ("+imc.toFixed(1)+")!";
    } else if (imc >= 25 && imc < 30) {
        outSaida.textContent = "Seu IMC indica que você está sobrepeso ("+imc.toFixed(1)+")!";
    } else if (imc >= 30 && imc < 35) {
        outSaida.textContent = "Seu IMC indica que você está com obesidade 1 ("+imc.toFixed(1)+")!";
    } else if (imc >= 35 && imc < 40) {
        outSaida.textContent = "Seu IMC indica que você está com obesidade 2 ("+imc+")!";
    } else { (imc >= 40)
        outSaida.textContent = "Seu IMC indica que você está com obesidade 3 ("+imc.toFixed(1)+")!";
    }
}

btCalcular.addEventListener("click", calcular);