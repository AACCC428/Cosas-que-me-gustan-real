alert("Virus instalado");
let name = prompt("¿Cómo te llamas?")
alert("Enhorabuena por tu primer virus " + name)

random 
let prob = (Math.random() * 100) + 1;
if (prob = 8) {
  
}

// Función que genera un número aleatorio cada segundo
setInterval(function() {
  // Generar número aleatorio entre 1 y 100
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  
  console.log("Número generado: " + randomNumber);
  
  // Si el número es 8, redirige a otra página
  if (randomNumber === 8) {
    console.log("¡Ganaste! Número 8 detectado. Redirigiendo...");
    window.location.href = "https://es.wikipedia.org/wiki/Walter_White";
  }
}, 1000); // 1000 ms = 1 segundo
