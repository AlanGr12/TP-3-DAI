let contador = 0;
const intervalo = setInterval(() => {
  contador++;
  console.log(contador);
}, 1000);

setTimeout(() => {
clearInterval(intervalo); 
console.log("El contador llego a 10 segundos")
},10000)
