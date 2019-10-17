//3. Faça uma função que dado um número, retorne se ele é par ou ímpar.

let numero = parseInt(prompt('Digite um número:')); 

function verificarParOuImpar(numero){
if (typeof numero !=='number'){
   return 'Isso não é um número';
  }
  if (numero % 2 ===1 ){
    return 'Número é impar';
  }
  else{
    return 'Número é par';
  }
}
console.log(verificarParOuImpar(numero));