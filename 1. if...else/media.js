





var inMedia = document.getElementById("inMedia");
var btRegistrar = document.getElementById("btRegistrar");
var btReiniciar = document.getElementById("btReiniciar");
var outAprovados = document.getElementById("outAprovados");
var outMediaGeral = document.getElementById("outMediaGeral");
var outMediaAprovados = document.getElementById("outMediaAprovados");
var somaMediaGeral = 0;
var qntAlunos = 0;
var qntAprovados = 0;
var somaMediaAprovados = 0;

function registraMedia() {
   var media = Number(inMedia.value);

   if (media == "" || media < 0 || media > 100) {
      alert("Insira um valor, que seja entre 0 e 100 para calcular a sua média");
      inMedia.value = "";

   } else {
      somaMediaGeral += media;
      qntAlunos++;

      if (media >= 60) {
         qntAprovados++;
         somaMediaAprovados += media;

         outAprovados.textContent = "Os estudantes aprovados são: " + qntAprovados;
         outMediaAprovados.textContent = "A média dos estudantes aprovados é: " + (somaMediaAprovados / qntAprovados).toFixed(2);
      }
      outMediaGeral.textContent = "A média geral dos estudantes é: " + (somaMediaGeral / qntAlunos).toFixed(2);
      inMedia.focus();
   }
}
btRegistrar.addEventListener("click", registraMedia);

function reiniciarRegistro() {
   inMedia.value = "";
   somaMediaGeral = 0;
   somaMediaAprovados = 0;
   qntAlunos = 0;
   qntAprovados = 0;
   outAprovados.textContent = "";
   outMediaAprovados.textContent = "";
   outMediaGeral.textContent = "";
   inMedia.focus();
}
btReiniciar.addEventListener("click", reiniciarRegistro);