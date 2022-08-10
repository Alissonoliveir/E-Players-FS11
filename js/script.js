$(document).ready(function () {
   $('.btn-buy').click(function () {
      produtoIndisponivel()
   });
});

function produtoIndisponivel() {
   alert('produto indisponivel');
}


function mostraEscondeMenu() {
   let navbar = document.getElementById("menu-principal");
   navbar.classList.toggle("navbarshow");

}