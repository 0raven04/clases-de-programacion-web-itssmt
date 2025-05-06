alert("Bienvenido ");

const parrafo = document.querySelector("p");
const mas = document.querySelector("#mas");
const menos = document.querySelector("#menos");


parrafo.addEventListener("click", function (e) {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    parrafo.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

});

mas.addEventListener("click", function (e) {
    const estilo = window.getComputedStyle(parrafo);
    let tam = parseFloat(estilo.fontSize);
    parrafo.style.fontSize = (tam + 2) + "px";
});

menos.addEventListener("click", function (e) {      
    const estilo = window.getComputedStyle(parrafo);
    let tam = parseFloat(estilo.fontSize);
    parrafo.style.fontSize = (tam - 2) + "px";
});