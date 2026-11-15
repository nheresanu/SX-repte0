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
function myFunction() {
  const message = document.getElementById("p1");
  message.innerHTML = "";

  let x = document.getElementById("demo").value;

  try {
    if(x.trim() == "") throw "campo vacio";
    if(isNaN(x)) throw "no es un numero";

    x = Number(x);

    if(x < 10) throw "numero demasiado bajo";
    if(x > 20) throw "numero demasiado alto";
    let resultado = "Opción correcta, el número está entre 10 y 20.";

    message.innerHTML = resultado;
    
    console.log("CORRECTO: " + resultado);

  } catch(err) {

    message.innerHTML = "Error, " + err;

    console.error("ERROR: " + err);
  }
}
