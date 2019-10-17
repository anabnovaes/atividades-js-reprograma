/*5. Altere a função que calcula IMC de maneira que o valor do IMC tenha apenas duas casas decimais.*/


let altura = parseFloat(prompt("Digite sua altura"));

let peso = parseFloat(prompt("Digite seu peso"));

function calcularImc(peso, altura){
 let imc = peso / (altura*altura);
  return imc.toFixed(2);
  
}
let valorIMC = calcularImc(peso, altura);

console.log(valorIMC);