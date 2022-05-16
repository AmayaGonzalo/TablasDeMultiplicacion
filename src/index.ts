let btnCalcular = document.getElementById("btnCalcular");
let contador: number;

btnCalcular.addEventListener("click", () => {
  let numero1: number = Number(dato.value);
  let numero2: number = Number(dato1.value);
  let resultado: number;

  for (contador = 1; contador <= numero2; contador++) {
    resultado = numero1 * contador;
    console.log(numero1 + " X " + contador + " = " + resultado);
  }
});
