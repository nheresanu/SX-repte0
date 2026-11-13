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
let resultado = sumar();
missatge.textContent = "resultado" ;
console.log('Botón pulsado y script ejecutado.');
});
});

function sumar() {
   let n1 = Number(prompt("Introdueix el primer número:"));
   let n2 = Number(prompt("A continuació, el segon número:"));
   let suma = n1 + n2; 

 console.log(`El resultat de la suma de ${n1} i ${n2} és ${suma}.`);

   return suma;
}
