let patente = document.getElementById('patente');
let fecha = document.getElementById('fecha');
let modo = document.getElementById('modo');

let inputText = document.getElementById('textoPpu');
let botonBuscar = document.getElementById('buscar');

let ppuObj = {
  'Hoja 1': [
    {
      PPU: 'QWER54',
      FECHA: '2023-12-12T00:00:00.000Z',
      MODO: 'MINIBUS',
    },
    {
      PPU: 'KKYK65',
      FECHA: '2023-12-23T00:00:00.000Z',
      MODO: 'AUTO',
    },
    {
      PPU: 'HHTT67',
      FECHA: '2022-06-24T00:00:00.000Z',
      MODO: 'AUTO',
    },
  ],
};

botonBuscar.addEventListener('click', () => {
  let valor = inputText.value;
  console.log(valor);
  ppuObj['Hoja 1'].forEach((elemento) => {
    if (elemento.PPU == valor) {
      patente.innerText = elemento.PPU;
      console.log(elemento.PPU);
      fecha.innerText = elemento.FECHA;
      console.log(elemento.FECHA);
      modo.innerText = elemento.MODO;
      console.log(elemento.MODO);
    }
  });
});
