const caja = document.querySelector("#caja1");
const texto = document.querySelector(".alert-info");

const btn1 = document.querySelector("#b1");//Cargar texto
const btn2 = document.querySelector("#b2");//Cambiar tipo de input
const btn3 = document.querySelector("#b3");//Agregar clase is-valid
const btn4 = document.querySelector("#b4");//Agregar clase is-invalid
const btn5 = document.querySelector("#b5");//Ocultar texto
const btn6 = document.querySelector("#b6");//Mostrar texto
const btn7 = document.querySelector("#b7");//Cambiar tamaño de fuente

btn1.addEventListener("click", function () {

    texto.innerText = caja.value;

});



btn2.addEventListener("click", function () {
    let a = caja.getAttribute("type");

    if (a === "text") {
        caja.setAttribute("type", "password");
        texto.innerText = "Contraseña oculta";
    } else {
        caja.setAttribute("type", "text");
        texto.innerText = caja.value;
    }
});

btn3.addEventListener("click", function () {
    caja.classList.remove("is-invalid");
    caja.classList.add("is-valid");
})

btn4.addEventListener("click", function () {
    caja.classList.remove("is-valid");
    caja.classList.add("is-invalid");
});

btn5.addEventListener("click", function () {
    if (texto.style.display !== "none") {
        texto.style.display = "none";
    } 
});

btn6.addEventListener("click", function () {
    if (texto.style.display === "none") {
        texto.style.display = "block";
    }
});

btn7.addEventListener("click", function () {
    let a = texto.style.fontSize;
    if (a === "20px") {
        texto.style.fontSize = "30px";
    } else {
        texto.style.fontSize = "20px";
    }
});