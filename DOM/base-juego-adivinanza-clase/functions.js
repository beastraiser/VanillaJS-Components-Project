//Funciones

export function randomNumber(from, to) {
  return Math.trunc(Math.random() * to + from);
}

export function checkInputNumber(n, min, max) {
  return n >= min && n < max && !isNaN(n);
}

export function checkRepeatedValues(n, array) {
  return array.includes(n);
}
