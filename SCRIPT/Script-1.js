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

/*Menu principal */
var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  menuButton.classList.toggle("active");
  menu.classList.toggle("active");
});


/*Sub-menú versión navegador de escritorio*/
var redesSocialesBtn = document.getElementById("redes-sociales-btn");
var socialMediaSubmenu = document.getElementById("social-media-submenu");

redesSocialesBtn.addEventListener("click", function(event) {
    // Obtener la posición del botón de redes sociales
    var botonRect = redesSocialesBtn.getBoundingClientRect();

    // Establecer la posición del submenú en relación con la ventana del navegador
    socialMediaSubmenu.style.top = botonRect.bottom + "px";
    socialMediaSubmenu.style.left = botonRect.left + "px";

    // Mostrar u ocultar el submenú
    socialMediaSubmenu.classList.toggle("active");

    // Detener la propagación del evento para evitar que active el event listener del documento
    event.stopPropagation();
});



// Función para ocultar el submenú cuando se hace clic fuera de él
document.addEventListener("click", function(event) {
    var target = event.target;
    // Verificar si el clic ocurrió fuera del botón de redes sociales y su submenú
    if (target.id !== "redes-sociales-btn" && !socialMediaSubmenu.contains(target)) {
        // Ocultar el submenú
        socialMediaSubmenu.classList.remove("active");
    }
});

// Función para ocultar el submenú cuando se hace scroll en la página
window.addEventListener("scroll", function() {
    // Ocultar el submenú
    socialMediaSubmenu.classList.remove("active");
    menu.classList.remove("active")
    menuButton.classList.remove("active");
});





function mostrarAlerta() {
    alert("¡La página de contacto está en construcción! ¡Vuelve pronto!");
  }
  

  

