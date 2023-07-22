let patente = document.getElementById('patente');
let fecha = document.getElementById('fecha');
let modo = document.getElementById('modo');

let inputText = document.getElementById('textoPpu');
let botonBuscar = document.getElementById('buscar');



console.log(ppuObj["Hoja1"]);

botonBuscar.addEventListener('click', () => {
  let valor = inputText.value;
  console.log(valor);
  ppuObj["Hoja1"].forEach((elemento) => {
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
