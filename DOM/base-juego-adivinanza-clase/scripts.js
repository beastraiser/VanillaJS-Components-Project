import * as f from "./functions.js";

const numeroSecreto = f.randomNumber(1, 100);
/* console.log(numeroSecreto); */

//Guardamos los elementos que vamos a utilizar en constantes
const numberInput = document.getElementById("numeroEntrada");
const intentosText = document.getElementById("intentos-input");
const comprobarButton = document.getElementById("button");
const mensaje = document.getElementById("mensaje");
//Iniciamos un array para posteriormente comprobar si un número ha sido introducido previamente
let numerosIntroducidos = [];

//Añadimos un evento al botón para cada click
comprobarButton.addEventListener("click", () => {
  //Guardamos la comprobación de si el input es igual al numero secreto
  let acierto = numeroSecreto === Number(numberInput.value);

  //Comprobamos si el input es un número válido y si ha sido introducido previamente
  if (!f.checkInputNumber(numberInput.value, 1, 100)) {
    mensaje.textContent = "Número incorrecto!";
    mensaje.style.color = "red";
    return; //Este return actual igual que un break
  } else if (
    f.checkRepeatedValues(Number(numberInput.value), numerosIntroducidos)
  ) {
    mensaje.textContent = "Número ya introducido!";
    mensaje.style.color = "red";
    return; //Este return actual igual que un break
  }

  //Si el código llega a este punto es porque el input es correcto, por lo que lo añadimos al array
  numerosIntroducidos.push(Number(numberInput.value));
  /* console.log(numerosIntroducidos); */

  //Cambiamos el contenido del mensaje dependiendo del valor de acierto y de si el input es mayor o menor
  mensaje.textContent = acierto
    ? "¡Enhorabuena, has acertado!"
    : numeroSecreto < Number(numberInput.value)
    ? "Demasiado alto"
    : "Demasiado bajo";

  //Hacemos lo mismo con el color del mensaje accediendo a su estilo
  mensaje.style.color = acierto
    ? "green"
    : numeroSecreto < Number(numberInput.value)
    ? "orange"
    : "blue";

  //Igualamos el valor disabled al de acierto, cercionandonos de que si acierto pasa a true, tambien se desactiven el input y el boton
  comprobarButton.disabled = acierto;
  numberInput.disabled = acierto;

  //Incrementamos el numero de intentos
  intentosText.textContent = Number(intentosText.textContent) + 1;
});
