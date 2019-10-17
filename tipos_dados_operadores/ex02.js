/*2. Crie uma função que receba 2 parâmetros e
exiba o resultado e o resto da divisão entre eles;*/

var divisao, restoDivisao;

function dividirValores(valor1, valor2){
   divisao = valor1/valor2;
 restoDivisao = valor1 % valor2;
  
  return divisao, restoDivisao; 
}

let valor1 = parseInt(prompt("Digite o primeiro valor"))
let valor2 = parseInt(prompt("Digite o segundo valor"))

dividirValores(valor1, valor2)

console.log(`A divisão entre os dois valores é ${divisao} e o resto é ${restoDivisao}`);