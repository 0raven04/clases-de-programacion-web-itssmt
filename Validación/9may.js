const cnombre = document.getElementById('nombre');
cnombre.addEventListener("keypress", soloLetras);
const cpaterno = document.getElementById('paterno');
cpaterno.addEventListener("keypress", soloLetras);
const cmaterno = document.getElementById('materno');
cmaterno.addEventListener("keypress", soloLetras);
const cusuario = document.getElementById('usuario');
cusuario.addEventListener("keypress", sinNumeros);
const ccurp = document.getElementById('curp');
ccurp.addEventListener("keypress", sinNumeros);
const cedad = document.getElementById('edad');
cedad.addEventListener("keypress", soloNumeros);
const ccontra = document.getElementById('contrasena');
const ccontrol = document.getElementById('control');
const carrera = document.getElementById('carrera');

//Evento para limpiar las cajas cuando el usuario escribe algo
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", function () {
        this.classList.remove("is-valid");
        this.classList.remove("is-invalid");
    });
});

ccontrol.addEventListener("input", controlTec)

const formRegistro = document.querySelector("form");
formRegistro.addEventListener("submit", function (event) {
    //event.preventDefault();

    let formValido = true;

    //Validar campo que no sea vacío
    if (!validarCampo(cnombre)) {
        formValido = false;
    }
    if (!validarLargo(ccurp)) {
        formValido = false;
    }
    if (!validarRango(contrasena)) {
        formValido = false;
    }
    if (!validarControl(ccontrol)) {
        formValido = false;
    }
    if (!validarRangoNumerico(cedad)) {
        formValido = false;
    }
    if (!validarRadio("sexo")) {
        formValido = false;
    }
    if (!validarSeleccion(carrera)) {
        formValido = false;
    }

    // Si el formulario no válido, se aula el envio
    if (!formValido) {
        alert("Formulario inválido. Por favor, revise los campos marcados.");
        event.preventDefault();
    }
});


//Validación a través de evitar escribir caracteres
function soloLetras(event) {
    let caja = event.target;
    caja.value = caja.value.replace(/[^a-zA-ZáÁéÉíÍóÓúÚ\s]/g, "");
}

function soloNumeros(event) {
    let caja = event.target;
    caja.value = caja.value.replace(/[^0-9]/g, "");
}

function sinNumeros(event) {
    let caja = event.target;
    caja.value = caja.value.replace(/[0-9]/g, "");
}

function controlTec(event) {
    let valor = event.target.value.toUpperCase();

    // Limitar la entrada a B o C al principio y números después
    valor = valor.replace(/[^BC0-9]/g, "");

    // Si el primer carácter no es B o C y hay algún carácter, eliminar caracteres no numéricos
    if (valor.length > 0 && ['B', 'C'].includes(valor[0])) {
        let letra = valor[0];
        valor = valor.slice(1);
        valor = letra + valor.replace(/[^0-9]/g, "");
    }
    else {
        valor = valor.replace(/[^0-9]/g, "");
    }

    // Limitar a máximo 9 caracteres (1 letra + 8 números o solo 8 números)
    if (valor.length > 9 && ['B', 'C'].includes(valor[0])) {
        valor = valor.slice(0, 9);
    }
    if (valor.length > 8 && !['B', 'C'].includes(valor[0])) {
        valor = valor.slice(0, 8);
    }

    event.target.value = valor;
}

// Función mejorada para validar campos vacíos
function validarCampo(elemento) {
    const padre = elemento.parentElement;
    const retroInvalid = padre.querySelector(".invalid-feedback");
    const retroValid = padre.querySelector(".valid-feedback");

    if (elemento.value.trim() === "") {
        elemento.classList.remove("is-valid");
        elemento.classList.add("is-invalid");
        retroInvalid.innerText = "Campo obligatorio";
        return false;
    } else {
        elemento.classList.remove("is-invalid");
        elemento.classList.add("is-valid");
        retroValid.innerText = "Campo válido";
        return true;
    }
}

// Función mejorada para validar largo
function validarLargo(elemento) {
    let maxLength = elemento.getAttribute("maxlength");
    let padre = elemento.parentElement;

    if (maxLength && elemento.value.length !== parseInt(maxLength)) {
        let retro = padre.querySelector(".invalid-feedback");
        retro.innerText = `El campo debe tener exactamente ${maxLength} caracteres`;
        elemento.classList.remove("is-valid");
        elemento.classList.add("is-invalid");
        return false;
    }
    else {
        let retro = padre.querySelector(".valid-feedback");
        retro.innerText = "Correcto!";
        elemento.classList.remove("is-invalid");
        elemento.classList.add("is-valid");
        return true;
    }
}
// Función mejorada para validar largo
function validarRango(elemento) {
    let maxLength = elemento.getAttribute("maxlength");
    let minLength = elemento.getAttribute("minlength");
    const padre = elemento.parentElement;

    if (elemento.value.length > parseInt(maxLength) || elemento.value.length < parseInt(minLength)) {
        let retro = padre.querySelector(".invalid-feedback");
        retro.innerText = `El campo debe tener como máximo ${maxLength} caracteres y mínimo ${minLength} caracteres`;
        elemento.classList.remove("is-valid");
        elemento.classList.add("is-invalid");
        return false;
    }
    else {
        let retro = padre.querySelector(".valid-feedback");
        retro.innerText = "Correcto!";
        elemento.classList.remove("is-invalid");
        elemento.classList.add("is-valid");
        return true;
    }
}
function validarControl(elemento) {
    elemento.value = elemento.value.toUpperCase();
    let padre = elemento.parentElement;

    const regex = /^(?:[BC])?\d{8}$/;

    if (elemento.value.trim() === "") {
        elemento.classList.remove("is-valid");
        elemento.classList.add("is-invalid");
        padre.querySelector(".invalid-feedback").innerText = "Campo obligatorio";
        return false;
    }
    else if (!regex.test(elemento.value)) {
        elemento.classList.remove("is-valid");
        elemento.classList.add("is-invalid");
        padre.querySelector(".invalid-feedback").innerText = "Formato inválido. Usa B o C (opcional) seguido de 8 números.";
        return false;

    } else {
        elemento.classList.remove("is-invalid");
        elemento.classList.add("is-valid");
        padre.querySelector(".valid-feedback").innerText = "Correcto!";
        return true;
    }
}
function validarRangoNumerico(elemento) {
    const min = elemento.getAttribute("min");
    const max = elemento.getAttribute("max");
    const valor = parseFloat(elemento.value);
    const padre = elemento.parentElement;

    if (elemento.value.trim() === "") {
        elemento.classList.remove("is-valid");
        elemento.classList.add("is-invalid");
        padre.querySelector(".invalid-feedback").innerText = "Campo obligatorio";
        return false;
    }

    if (isNaN(valor)) {
        elemento.classList.remove("is-valid");
        elemento.classList.add("is-invalid");
        padre.querySelector(".invalid-feedback").innerText = "Debe ser un número válido";
        return false;
    }

    if (min && valor < parseFloat(min) || max && valor > parseFloat(max)) {
        elemento.classList.remove("is-valid");
        elemento.classList.add("is-invalid");
        padre.querySelector(".invalid-feedback").innerText =
            `El valor debe estar entre ${min || 'sin límite'} y ${max || 'sin límite'}`;
        return false;
    }

    elemento.classList.remove("is-invalid");
    elemento.classList.add("is-valid");
    padre.querySelector(".valid-feedback").innerText = "¡Valor correcto!";
    return true;
}

function validarRadio(nombre) {
    const radioButtons = document.querySelectorAll(`input[name="${nombre}"]`);
    let seleccionado = false;

    radioButtons.forEach(radio => {
        if (radio.checked) {
            seleccionado = true;
        }
    });

    if (!seleccionado) {
        radioButtons.forEach(radio => {
            radio.classList.remove("is-valid");
            radio.classList.add("is-invalid");
            let retro = radio.parentElement.querySelector(".invalid-feedback");
            if (retro)
                retro.innerText = "Debe seleccionar una opción";

        });
        return false;
    } else {
        radioButtons.forEach(radio => {
            radio.classList.remove("is-invalid");
            radio.classList.add("is-valid");
            let retro = radio.parentElement.querySelector(".valid-feedback");
            if (retro)
                retro.innerText = "Selección válida";
        });
        return true;
    }
}
function validarSeleccion(elemento) {
    const padre = elemento.parentElement;
    const retroInvalid = padre.querySelector(".invalid-feedback");
    const retroValid = padre.querySelector(".valid-feedback");

    if (elemento.value == "") {
        elemento.classList.remove("is-valid");
        elemento.classList.add("is-invalid");
        retroInvalid.innerText = "Debe seleccionar una opción";
        return false;
    }
    else {
        elemento.classList.remove("is-invalid");
        elemento.classList.add("is-valid");
        retroValid.innerText = "Selección válida";
        return true;
    }
}
function validaCURP(elemento) {
    const regexCURP = /^[A-Z][AEIOU][A-Z]{2}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[HM](AS|BC|BS|CC|CL|CM|CS|CH|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]\d$/;
    const padre = elemento.parentElement;
    const retroInvalid = padre.querySelector(".invalid-feedback");
    const retroValid = padre.querySelector(".valid-feedback");

    if (!regexCURP.test(elemento.value)) {
        elemento.classList.remove("is-valid");
        elemento.classList.add("is-invalid");
        retroInvalid.innerText = "Formato de CURP incorrecto";
        return false;
    }
    else {
        elemento.classList.remove("is-invalid");
        elemento.classList.add("is-valid");
        retroValid.innerText = "Selección válida";
        return true;
    }
}
function validaRFC(elemento) {
    const regexRFC = /^[A-ZÑ&]{3,4}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[A-Z\d]{2}[0-9A]$/;
    const padre = elemento.parentElement;
    const retroInvalid = padre.querySelector(".invalid-feedback");
    const retroValid = padre.querySelector(".valid-feedback");

    if (!regexRFC.test(elemento.value)) {
        elemento.classList.remove("is-valid");
        elemento.classList.add("is-invalid");
        retroInvalid.innerText = "Formato de CURP incorrecto";
        return false;
    }
    else {
        elemento.classList.remove("is-invalid");
        elemento.classList.add("is-valid");
        retroValid.innerText = "Selección válida";
        return true;
    }
}
function validaCorreo(elemento) {
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const padre = elemento.parentElement;
    const retroInvalid = padre.querySelector(".invalid-feedback");
    const retroValid = padre.querySelector(".valid-feedback");

    if (!regexCorreo.test(elemento.value)) {
        elemento.classList.remove("is-valid");
        elemento.classList.add("is-invalid");
        retroInvalid.innerText = "Formato de CURP incorrecto";
        return false;
    }
    else {
        elemento.classList.remove("is-invalid");
        elemento.classList.add("is-valid");
        retroValid.innerText = "Selección válida";
        return true;
    }
}