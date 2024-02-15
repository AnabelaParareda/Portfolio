function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    var x = document.getElementById("nav");
    x.className = "";
}

function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

window.onscroll = function() {efectoHabilidades()};

function efectoHabilidades() {
    var skills = document.getElementById("skills");
/*     var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    console.log("altura", window.innerHeight, "top", skills.getBoundingClientRect().top) */
    if (skills.getBoundingClientRect().top <= 255) {
        document.getElementById("frontend").classList.add("barra-progreso1");
        document.getElementById("backend").classList.add("barra-progreso2");
        document.getElementById("reactjs").classList.add("barra-progreso3");
        document.getElementById("angular").classList.add("barra-progreso4");
    }

}

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;
  const emailRegex = /\S+@\S+\.\S+/;

  if (nombre.trim() === '') {
    alert('Por favor, ingrese su nombre');
    return;
  }

  if (!emailRegex.test(email)) {
    alert('Por favor, ingrese un correo electrónico válido');
    return;
  }

  if (mensaje.trim() === '') {
    alert('Por favor, ingrese un mensaje');
    return;
  }

  alert('El formulario se ha enviado correctamente');
  form.reset();
});