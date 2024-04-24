function mostrarPagina(pagina) {
    var paginas = document.querySelectorAll('.Page-1, .Page-2');
    for (var i = 0; i < paginas.length; i++) {
        if (paginas[i].classList.contains(pagina)) {
            // Mostrar la página de forma suave
            fadeIn(paginas[i]);
            menuButton.classList.remove("active");
            menu.classList.remove("active");
        } else {
            // Ocultar la página de forma suave
            fadeOut(paginas[i]);
            menuButton.classList.remove("active");
            menu.classList.remove("active");
        }
    }
}

function fadeIn(elemento) {
    var opacidad = 0;
    elemento.style.display = 'block'; // Mostrar la página
    var intervalo = setInterval(function () {
        if (opacidad < 1) {
            opacidad += 0.1;
            elemento.style.opacity = opacidad;
        } else {
            clearInterval(intervalo);
        }
    }, 50);
}

function fadeOut(elemento) {
    var opacidad = 1;
    var intervalo = setInterval(function () {
        if (opacidad > 0) {
            opacidad -= 0.1;
            elemento.style.opacity = opacidad;
        } else {
            clearInterval(intervalo);
            elemento.style.display = 'none'; // Ocultar la página
        }
    }, 50);
}
var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  menuButton.classList.toggle("active");
  menu.classList.toggle("active");
});


