/*6. Crie uma função que calcule quantos dias o usuário viveu, 
baseado na idade */

let idade = parseInt(prompt("Digite sua idade"));

function calcularDiasDeVida(idade){
  return idade * 365;
  
}

console.log('Você viveu ' + calcularDiasDeVida(idade) + ' dias');