function generadorDeExcusa() {
  //Arrays para luego concatenar
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [  "before the class","when I was sleeping","while I was exercising","during my lunch","while I was praying"];

//generar aleatoriamente entre los arrays
const whoRandom = Math.floor(Math.random() * who.length);
const actionRandom = Math.floor(Math.random() * action.length);
const whatRandom = Math.floor(Math.random() * what.length);
const whenRandom = Math.floor(Math.random() * when.length);

//concatenar para acceder a la posicion de cada arreglo con el generador
const excusa = `${who[whoRandom]} ${action[actionRandom]}${what[whatRandom]}${when[whenRandom]}.`;

  return excusa;
}
// Función para obtener el elemento HTML con el ID "excuse"
function mostrarExcusa() {
  let excuseContent = document.getElementById("excuse");

  // Aquí se generará la excusa
  let excuse = generarExcusa();

  excuseContent.innerHTML = excuse;
}

onload = mostrarExcusa();