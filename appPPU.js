let patente = document.getElementById('patente');
let fecha = document.getElementById('fecha');
let modo = document.getElementById('modo');
let respuesta = document.querySelector('.respuesta');
let alerta = document.getElementById('alerta');

let inputText = document.getElementById('textoPpu');
let botonBuscar = document.getElementById('buscar');
let botonResetear = document.getElementById('resetear');

let contador = 0;

console.log(ppuObj['Hoja1']);
console.log(alerta);

botonBuscar.addEventListener('click', () => {
  let valor = inputText.value;
  let patenteBuscar = valor.toUpperCase();
  ppuObj['Hoja1'].forEach((elemento) => {
    if (elemento.PPU == patenteBuscar) {
      respuesta.style.opacity = 1;
      patente.innerText = `Patente: 
      ${elemento.PPU}`;
      console.log(elemento.PPU);
      fecha.innerText = `Fecha: 
      ${elemento.FECHA.substring(0, 10)}`;
      console.log(elemento.FECHA);
      modo.innerText = `Modo: 
      ${elemento.MODO}`;
      console.log(elemento.MODO);
    } else {
      contador++;
    }
  });
  if (contador == ppuObj['Hoja1'].length) {
    console.log('fiscalizar');
    alerta.style.opacity = 1;
  }
});

botonResetear.addEventListener('click', () => {
  console.log('resetar');
  alerta.style.opacity = 0;
  respuesta.style.opacity = 0;
  inputText.value = '';
  contador= 0
});
