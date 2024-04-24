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


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('redes-sociales-btn').addEventListener('click', function(event) {
        console.log("Botón de redes sociales clickeado");
        
        const desplegable = document.getElementById("social-media-submenu");
        
        if (desplegable.style.height === "0px" || !desplegable.style.height) {
            desplegable.style.height = desplegable.scrollHeight + "px"; // Desplegar el sub-menú
        } else {
            desplegable.style.height = "0"; // Contraer el sub-menú
        }
    });
});


var redesSocialesBtn = document.getElementById("redes-sociales-btn");
var socialMediaSubmenu = document.getElementById("social-media-submenu");

redesSocialesBtn.addEventListener("click", function(event) {
  // Obtener la posición del botón de redes sociales
  var botonRect = event.target.getBoundingClientRect();

  // Calcular la posición de desplazamiento vertical de la página
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Establecer la posición del submenú
  socialMediaSubmenu.style.top = (botonRect.bottom + scrollTop) + "px";
  socialMediaSubmenu.style.left = botonRect.left + "px";
  
  // Mostrar el submenú
  socialMediaSubmenu.classList.toggle("active");
});


function mostrarAlerta() {
    alert("¡La página de contacto está en construcción! ¡Vuelve pronto!");
  }
  

