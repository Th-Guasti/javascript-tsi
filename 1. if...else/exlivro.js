var inNome = document.getElementById("inNome");
var inNota1 = document.getElementById("inNota1");
var inNota2 = document.getElementById("inNota2");
var bResultado = document.getElementById("bResultado");
var inMedia = document.getElementById("inMedia");
var inSituacao = document.getElementById("inSituacao");

function calcularMedia(){
    var nome = inNome.value;
    var nota1 = Math.abs(Number (inNota1.value));
    var nota2 = Math.abs(Number (inNota2.value));
    var media = (nota1+nota2)/2;
    inMedia.textContent = "Média das notas: "+ media.toFixed(1);
    //CRIANDO A CONDIÇÃO
    if (media >= 7){
        inSituacao.textContent = "Parabéns "+nome+"! Você foi aprovado(a)";
        inSituacao.style.color = "blue";
    } else {
        inSituacao.textContent = "Ops "+nome+"... Você foi reprovado(a)";
        inSituacao.style.color = "red";
    }
}

bResultado.addEventListener("click", calcularMedia);
