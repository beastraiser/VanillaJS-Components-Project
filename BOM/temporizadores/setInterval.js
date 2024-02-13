/* let t1 = new Date();
console.log(t1.getHours() + ":" + t1.getMinutes() + ":" + t1.getSeconds());
identificador = window.setInterval(() => {
  let t2 = new Date();
  console.log(t2.getHours() + ":" + t2.getMinutes() + ":" + t2.getSeconds());
}, 3000);
console.log("Programa terminado");

//Con contador
let contador = 0;

identificador = window.setInterval(() => {
  let t2 = new Date();
  console.log(t2.getHours() + ":" + t2.getMinutes() + ":" + t2.getSeconds());

  contador++;
  //El contador se incrementa cada vez que se ejecuta una orden en el intervalo

  if (contador === 3) {
    clearInterval(identificador);
    console.log("Programa terminado");
  }
}, 3000); */

//Actividad 6.2 resuelta
let identificador = window.setInterval(() => {
  let respuesta = window.confirm(
    "Tienes cita con el dentista. ¿Te lo sigo recordando?"
  );
  if (respuesta === false) {
    window.clearInterval(identificador);
    console.log("Programa terminado.");
  } else {
    console.log("Seguir recordando.");
  }
}, 5000);
