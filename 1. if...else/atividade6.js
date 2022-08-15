/* Autor: Thales
   Data: 23/05/2022
   Versão: 1.0
   Descrição: Calcular a média dos alunos e apresentar o número de aprovados
*/

var inMedia = document.getElementById("inMedia");
var btRegistrar = document.getElementById("btRegistrar");
var btReiniciar = document.getElementById("btReiniciar");
var outAprovados = document.getElementById("outAprovados");
var outMediaGeral = document.getElementById("outMediaGeral");
var outMediaAprovados = document.getElementById("outMediaAprovados");
var mediaGeral = 0;
var qntAlunos = 0;
var qntAprovados = 0;
var mediaAprovados = 0;

function registrarMedia() {
   var media = Number(inMedia.value);
   if (media == "" || media < 0 || media > 100) {
      alert("Insira sua média (sendo um valor entre 0 e 100)!");
      inMedia.value = "";
      inMedia.focus();
   } else {
      qntAlunos++;
      mediaGeral == media;
      
      if (media >= 60) {
         qntAprovados++;
         outAprovados.textContent = "O total de alunos aprovados é: " + qntAprovados;
         outMediaGeral.textContent = "A média geral da turma é: " + (media / qntAlunos);

      } else if (media < 60) {
         qntAprovados = 0;
         mediaAprovados = 0;
         outAprovados.textContent = "O total de alunos  aprovados é: " + qntAprovados;
         outMediaGeral.textContent = "A média geral da turma é: " + (media / qntAlunos);
         outMediaAprovados.textContent = "A média dos alunos aprovados é " + (mediaAprovados / qntAprovados);
      }
   }
}
btRegistrar.addEventListener("click", registrarMedia);

function reiniciarMedia() { 
   mediaGeral = 0;
   qntAlunos = 0;
   qntAprovados = 0;
   mediaAprovados = 0;
   outAprovados.textContent = "";
   outMediaGeral.textContent = "";
   outMediaAprovados.textContent = "";
}
btReiniciar.addEventListener("click", reiniciarMedia);