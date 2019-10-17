/*1. Crie uma função que dado um número seja retornado o número reverso. Ex.: dado 1234, devolve 4321.*/
function inverterNumero(numero){
    return numero.toString().split('').reverse().join('');
  }
  
  console.log(inverterNumero(1234))
  
  
  
