let t1 = new Date();
console.log(t1.getHours() + ":" + t1.getMinutes() + ":" + t1.getSeconds());
identificador = window.setTimeout(() => {
  let t2 = new Date();
  console.log(t2.getHours() + ":" + t2.getMinutes() + ":" + t2.getSeconds());
}, 5000);
clearTimeout(identificador);
console.log("Programa terminado");
