const formRegistro = document.getElementById("formRegistro");

// Campos
const Cnombre = document.getElementById("nombre");
const Cusuario = document.getElementById("usuario");
const CAp_paterno = document.getElementById("Ap_paterno");
const CAp_materno = document.getElementById("Ap_materno");
const Cpassword = document.getElementById("password");
const CEdad = document.getElementById("edad");
const Ccurp = document.getElementById("curp");
const generoH = document.getElementById("H");
const generoM = document.getElementById("M");

[Cnombre, Cusuario, CAp_paterno, CAp_materno, Cpassword, CEdad, Ccurp].forEach(campo => {
    campo.addEventListener("input", () => {
        if (campo.classList.contains("is-invalid")) {
            campo.classList.remove("is-invalid");
        }
    });
});

[generoH, generoM].forEach(radio => {
    radio.addEventListener("change", () => {
        const feedbackGenero = generoH.closest(".col-md-4").querySelector(".invalid-feedback");
        feedbackGenero.style.display = "none";
    });
});

formRegistro.addEventListener("submit", function (event) {
    event.preventDefault();

    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("input", function () {
            this.classList.remove("is-valid");
            this.classList.remove("is-invalid");
        });
    });

    let ok = true;

    if (noVacio(Cnombre)) ok = false;
    if (noVacio(Cusuario)) ok = false;
    if (noVacio(CAp_paterno)) ok = false;
    if (noVacio(CAp_materno)) ok = false;
    if (noVacio(CEdad)) ok = false;
    if (noVacio(Cpassword)) ok = false;
    if (Largo(Ccurp)) ok = false;

    if (!generoSeleccionado()) ok = false;

    if (ok) {


    }
});

// Funciones

function noVacio(elemento) {
    const valor = elemento.value.trim();
    const padre = elemento.parentElement;
    const valid = padre.querySelector(".valid-feedback");
    const invalid = padre.querySelector(".invalid-feedback");

    if (valor === "") {
        elemento.classList.add("is-invalid");
        if (invalid) invalid.innerText = "Campo obligatorio.";
        return true;
    } else {
        elemento.classList.add("is-valid");
        if (valid) valid.innerText = "Correcto.";
        return false;
    }
}

function Largo(caja) {
    const largo = parseInt(caja.getAttribute("maxlength"));
    const retro = document.getElementById("retro");

    if (caja.value.length === largo) {
        caja.classList.add("is-valid");
        retro.innerText = "Correcto.";
        return false;
    } else {
        caja.classList.add("is-invalid");
        retro.innerText = "Debe escribir exactamente " + largo + " caracteres.";
        return true;
    }
}

function generoSeleccionado() {
    const feedback = generoH.closest(".col-md-4").querySelector(".invalid-feedback");

    if (!generoH.checked && !generoM.checked) {
        feedback.style.display = "block";
        return false;
    } else {
        feedback.style.display = "none";
        return true;
    }
}

// Restricciones de escritura
function soloLetras(event) {
    let caja = event.target;
    caja.value = caja.value.replace(/[^a-zA-ZáÁéÉíÍóÓúÚñÑ\s]/g, '');
}

function sinNumeros(event) {
    let caja = event.target;
    caja.value = caja.value.replace(/[^0-9]/g, '');
}

function usuario(event) {
    let caja = event.target;
    caja.value = caja.value.replace(/[^a-zA-Z0-9\s]/g, '');
}

// Asignar restricciones
Cnombre.addEventListener("keypress", soloLetras);
Cusuario.addEventListener("keypress", usuario);
CAp_paterno.addEventListener("keypress", soloLetras);
CAp_materno.addEventListener("keypress", soloLetras);
CEdad.addEventListener("keypress", sinNumeros);
Ccurp.addEventListener("keypress", usuario);
