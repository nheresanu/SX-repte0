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
function funcion1() {
    const message = document.getElementById("message");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;
  try {
    if(x == "") throw "esta vacio";
    if(isNaN(x)) throw "no es un numero";
    if(x > 20) throw "muy alto";
    if(x < 10) throw "muy bajo";
  } 
  catch(err) {
    message.innerHTML = "Input " + err;
  }
  finally {
    document.getElementById("demo").value = "";
  }
}



console.log('Botón pulsado y script ejecutado.');
});
});
