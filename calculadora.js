// Espera a que toT elcontigut de l’HTML s’hagi carregat
document.addEventListener('DOMContentLoaded', () => {
// Seleccionam el botó pel seu ID
const boto = document.getElementById('boto');
const missatge = document.getElementById('missatge');
// Asignam la funció que s’executara al pulsar el botó
boto.addEventListener('click', () => {
missatge.textContent = '¡El archivo script.js se ha ejecutado correctamente!';
missatge.style.color = 'green';


// Aquí poses el codi que vulguis executar
const patron = /^\s*([+-]?\d+(?:\.\d+)?)\s*([+\-*/%])\s*([+-]?\d+(?:\.\d+)?)\s*$/;

function calcular() {

    const entrada = document.getElementById("operacion").value;

    const coincidencia = entrada.match(patron);

    if (!coincidencia) {
        mostrarResultado(
            entrada,
            "Error: La expresion no es valida",
            true
        );
        return;
    }
    const a = Number(coincidencia[1]);
    const operador = coincidencia[2];
    const b = Number(coincidencia[3]);

    let resultado;

    if (b === 0 && operador === "/") {

        mostrarResultado(
            entrada,
            "Error: No se puede dividir entre cero",
            true
        );
        return;

    }
    
    if (b === 0 && operador === "%") {

        mostrarResultado(
            entrada,
            "Error: No se puede calcular entre cero",
            true
        );
        return;
    }

    switch (operador) {
        case "+":
            resultado = a + b;
            break;
        case "-":
            resultado = a - b;
            break;
        case "*":
            resultado = a * b;
            break;
        case "/":
            resultado = a / b;
            break;
    }
    
    mostrarResultado(entrada, resultado, false);
}

function mostrarResultado(entrada, resultado, esError) {

    const tabla = document.getElementById("historial");

    const fila = document.createElement("tr");

    const celdaEntrada = document.createElement("td");
    const celdaResultado = document.createElement("td");

    celdaEntrada.textContent = entrada;
    celdaResultado.textContent = esError
        ? resultado
        : "Resultado: " + resultado;

    celdaResultado.className = esError ? "error" : "resultado";

    fila.appendChild(celdaEntrada);
    fila.appendChild(celdaResultado);

    tabla.appendChild(fila);

}
