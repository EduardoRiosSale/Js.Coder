
//botones
const btnPerro = document.querySelector("#Perro");
btnPerro.addEventListener("click", mostrarAlerta1);
function mostrarAlerta1() {
    alert("Tenemos 3 Perros listos para ser adoptados.")
};

const btnGato = document.querySelector("#Gato");
btnGato.addEventListener("click", mostrarAlerta2);
function mostrarAlerta2() {
    alert("Tenemos 5 Gatos listos para ser adoptados.")
};

const btnAve = document.querySelector("#Ave");
btnAve.addEventListener("click", mostrarAlerta3);
function mostrarAlerta3() {
    alert("Tenemos 5 Aves listas para ser adoptadas.")
};

const btnenviar = document.querySelector("#enviar");
btnenviar.addEventListener("click", mostrarAlerta4);
function mostrarAlerta4() {
    alert("Su formulario a sido enviado.")
};

const btnColorMode = document.querySelector("#color-mode");

btnColorMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        btnColorMode.innerText = "🌙";
    } else {
        btnColorMode.innerText = "☀️";
    }
})



// Storage con nombre
let titulo = document.querySelector("#titulo");
let nombre = localStorage.getItem("nombre");
if(nombre !== null){
    titulo.innerText = "¡Estamos felices de recibirte " + nombre + "!";
}else{
    nombre = prompt("Ingrese su nombre.");
    localStorage.setItem("nombre", nombre);
    titulo.innerText = "¡Estamos felices de recibirte " + nombre + "!";
}

