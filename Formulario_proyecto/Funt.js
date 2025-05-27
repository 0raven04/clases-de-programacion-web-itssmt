
const numInput = document.getElementById('numPersonas');
const container = document.getElementById('personasContainer');

function crearCamposPersonas(cantidad) {
    container.innerHTML = ''; // Limpiar campos anteriores

    for (let i = 1; i <= cantidad; i++) {
        const div = document.createElement('div');
        div.classList.add('mb-3');
        div.innerHTML = `

               <div class="row mt-5">
                <p class="h5 text-center mb-3">Persona ${i}</p>
                <div class="mt-3 col-12 col-sm-6 col-md-6 mb-3 mb-md-0 d-flex flex-column align-items-center text-center"> 
                    <label for="edad${i}" class="form-label">Edad</label>
                    <input type="number" class="form-control mb-2" id="edad${i}" name="edad${i}" min="0" required>
                    <div class="invalid-feedback">
                      Ingresa una edad válida
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-md-6 mb-3 mb-md-0 d-flex flex-column align-items-center text-center mt-3 !important">
                    <label for="genero${i}" class="form-label">Género</label>
                    <select class="form-select" id="genero${i}" name="genero${i}" required>
                    <option value="" disabled selected>Selecciona género</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                    </select>
                    <div class="invalid-feedback">
                      Selecciona una opción
                    </div>
                </div>
                </div>
                <hr class="my-3 d-md-none">
            `;
        container.appendChild(div);
    }
}

numInput.addEventListener('input', () => {
    const cantidad = parseInt(numInput.value);
    if (!isNaN(cantidad) && cantidad > 0) {
        crearCamposPersonas(cantidad);
    } else {
        container.innerHTML = '';
    }
});


document.addEventListener('DOMContentLoaded', () => {
    crearCamposPersonas(parseInt(numInput.value));
});

(function () {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
