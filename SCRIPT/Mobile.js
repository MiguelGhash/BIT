/*Menu principal */
var MovilmenuButton = document.getElementById("Movil-menu-button");
var Movilmenu = document.getElementById("Movil-menu");

MovilmenuButton.addEventListener("click", function() {
  MovilmenuButton.classList.toggle("active");
  Movilmenu.classList.toggle("active");
});




document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('Movil-redes-sociales-btn').addEventListener('click', function(event) {     
        const desplegable = document.getElementById("Movil-social-media-submenu");
        
        if (desplegable.style.height === "0px" || !desplegable.style.height) {
            desplegable.style.height = desplegable.scrollHeight + "px"; 
        } else {
            desplegable.style.height = "0"; 
        }
    });
});




