import { ppuObj } from '/Variables.js';
const baseDatos = ppuObj.Hoja1;
console.log(baseDatos);
let contadorFallos;

const ppuBusqueda = document.getElementById('textoPpu');
const btnBusqueda = document.getElementById('busqueda');
const btnResetear = document.getElementById('resetear');

const patenteBuscada = document.getElementById('patente');
const fechaBuscada = document.getElementById('fecha');
const subsidioBuscada = document.getElementById('subsidio');
const modoBuscada = document.getElementById('modo');
const alertaBuscada = document.getElementById('alerta');

const resetearTodo = () => {
  patenteBuscada.innerText = '';
  fechaBuscada.innerText = '';
  subsidioBuscada.innerText = '';
  modoBuscada.innerText = '';
  ppuBusqueda.value = '';
  alertaBuscada.innerText = '';
  alertaBuscada.style.backgroundColor='#3f82f0'
};

btnResetear.addEventListener('click', () => {
  resetearTodo();
});

btnBusqueda.addEventListener('click', () => {
  contadorFallos = 0;
  let dato = ppuBusqueda.value;
  let DATO = dato.toUpperCase();

  baseDatos.forEach((element) => {
    if (element.PPU == DATO) {
      alertaBuscada.style.backgroundColor='#3f82f0'
      alertaBuscada.innerText = '';
      patenteBuscada.innerText = element.PPU;
      fechaBuscada.innerText = `${element.FECHA.substr(
        8,
        2
      )} - ${element.FECHA.substr(5, 2)} - ${element.FECHA.substr(0, 4)}`;
      modoBuscada.innerText = element.MODO;
      subsidioBuscada.innerText = element.SUBSIDIO;

      contadorFallos = 0;
    } else {
      contadorFallos += 1;
    }
  });

  if (contadorFallos == baseDatos.length) {
    console.log(contadorFallos);
    console.log('fiscalizar');
    alertaBuscada.innerText = 'Fiscalizar';
    ppuBusqueda.value = '';
    alertaBuscada.style.backgroundColor='red'
  }
});
