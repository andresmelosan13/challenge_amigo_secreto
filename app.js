//aquí deberás desa El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Arrollar la lógica para resolver el problema.

const inputAmigos = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = inputAmigos.value.trim(); // quitamos espacios extras

    if (!nombre) {
        alert("Debes ingresar un nombre");
        return; // detenemos la función
    }

    if (listaAmigos.includes(nombre)) {
        alert("Ese nombre ya fue ingresado");
        return; // detenemos si ya existe
    }

    listaAmigos.push(nombre);
    ulListaAmigos.innerHTML += `<li>${nombre}</li>`;
    inputAmigos.value = ""; // limpiar input
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
