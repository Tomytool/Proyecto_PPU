import { ppuObj } from '/Variables.js';

console.log(ppuObj);

let patente = document.getElementById('patente');
let fecha = document.getElementById('fecha');
let modo = document.getElementById('modo');
let subsidio = document.getElementById('subsidio');
let respuesta = document.querySelector('.respuesta');
let alerta = document.getElementById('alerta');

let inputText = document.getElementById('textoPpu');
let botonBuscar = document.getElementById('buscar');
let botonResetear = document.getElementById('resetear');

let contador = 0;

console.log(ppuObj['Hoja1']);

botonBuscar.addEventListener('click', () => {
  console.log('buscar');
  let valor = inputText.value;
  inputText.value=''
  let patenteBuscar = valor.toUpperCase();
  ppuObj['Hoja1'].forEach((elemento) => {
    if (elemento.PPU == patenteBuscar) {
      respuesta.style.opacity = 1;
      patente.innerText = `Patente: ${elemento.PPU}`;
      fecha.innerText = `Fecha: ${elemento.FECHA.substring(0, 10)}`;
      subsidio.innerText = `Subsidio: ${elemento.SUBSIDIO}`;
      modo.innerText = `Modo: 
      ${elemento.MODO}`;
    } else {
      contador++;
    }
  });
  if (contador == ppuObj['Hoja1'].length) {
    alerta.style.opacity = 1;
  }
});

botonResetear.addEventListener('click', () => {
  console.log('reset');
  alerta.style.opacity = 0;
  respuesta.style.opacity = 0;
  inputText.value = '';
  contador = 0;
});
