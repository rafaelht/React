let numeros = [];

// Generar 6 números aleatorios
for (let i = 0; i < 6; i++) {
  let numero = Math.floor(Math.random() * 100) + 1;
  numeros.push(numero);
}

// Imprimir los números generados
console.log("Los números generados son:");
console.log(numeros);