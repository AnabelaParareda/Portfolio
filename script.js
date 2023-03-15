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
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("frontend").classList.add("barra-progreso1");
        document.getElementById("backend").classList.add("barra-progreso2");
        document.getElementById("reactjs").classList.add("barra-progreso3");
        document.getElementById("angular").classList.add("barra-progreso4");
    }

}

/*const contactForm = document.getElementById('contactForm');
const inputs = document.querySelectorAll('#contactForm input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const validarcontactForm = (e) => {
    switch (e.target.name) {
        case "nombre":
            if (expresiones.nombre.test(e.target.value)) {

            } else {
            }

        break;
        
        case "email":
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('contacto__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('contacto__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .contacto__input-error`).classList.remove('contacto__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('contacto__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('contacto__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .contacto__input-error`).classList.add('contacto__input-error-activo');
		campos[campo] = false;
    } 
}
    
inputs.forEach((input) => {
    input.addEventListener('keyup', validarcontactForm);
    input.addEventListener('blur', validarcontactForm);
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
});



//const nombre = document.getElementById("nombre")
//const email = document.getElementById("email")
//onst message = document.getElementById("mensaje") */